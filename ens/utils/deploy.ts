import { HardhatRuntimeEnvironment } from 'hardhat/types'
import ENSRegistryModule from '../ignition/modules/ENSRegistry'
import PublicResolverModule from '../ignition/modules/PublicResolver'
import FIFSRegistrarModule from '../ignition/modules/FIFSRegistrar'
import ReverseRegistrarModule from '../ignition/modules/ReverseRegistrar'
import RootModule from '../ignition/modules/Root'
import { zeroHash } from 'viem'
import { labelHash, nodeHash } from './hash'

const ROOT_NODE = zeroHash

async function deployContracts(
  hre: HardhatRuntimeEnvironment,
  options: { verbose?: boolean } = {},
) {
  const log = options?.verbose ? console.log : () => {}

  const { ensRegistry } = await hre.ignition.deploy(ENSRegistryModule)
  log(`ENSRegistry deployed to ${ensRegistry.address}`)

  const { publicResolver } = await hre.ignition.deploy(PublicResolverModule)
  log(`PublicResolver deployed to ${publicResolver.address}`)

  const { fifsRegistrar } = await hre.ignition.deploy(FIFSRegistrarModule)
  log(`FIFSRegistrar deployed to ${fifsRegistrar.address}`)

  const { reverseRegistrar } = await hre.ignition.deploy(ReverseRegistrarModule)
  log(`ReverseRegistrar deployed to ${reverseRegistrar.address}`)

  const { root } = await hre.ignition.deploy(RootModule)
  log(`Root deployed to ${root.address}`)

  return { ensRegistry, publicResolver, fifsRegistrar, reverseRegistrar, root }
}

export async function deployAndSetupContracts(
  hre: HardhatRuntimeEnvironment,
  options: { verbose?: boolean; initialize?: boolean } = {},
) {
  const { verbose = false, initialize = false } = options!
  const log = verbose ? console.log : () => {}

  // 1. Deploy contracts
  log('Deploying contracts')
  const contracts = await deployContracts(hre, options)
  const { ensRegistry, publicResolver, fifsRegistrar, reverseRegistrar, root } =
    contracts

  if (!initialize) {
    return contracts
  }

  log('Initializing contracts')
  const [deployer] = await hre.viem.getWalletClients()

  // 2. setup public resolver
  log('Setting owner of `resolver` to deployer')
  await ensRegistry.write.setSubnodeOwner([
    ROOT_NODE,
    labelHash('resolver'),
    deployer.account.address,
  ])
  log('Setting resolver of `resolver` to PublicResolver')
  await ensRegistry.write.setResolver([
    nodeHash('resolver'),
    publicResolver.address,
  ])
  log('Setting addr of `resolver` to PublicResolver')
  await publicResolver.write.setAddr([
    nodeHash('resolver'),
    publicResolver.address,
  ])

  // 3. setup FIFS registrar for 'eth'
  log('Setting owner of `eth` to FIFSRegistrar')
  await ensRegistry.write.setSubnodeOwner([
    ROOT_NODE,
    labelHash('eth'),
    fifsRegistrar.address,
  ])

  // 4. setup reverse registrar
  log('Setting owner of `reverse` to deployer')
  await ensRegistry.write.setSubnodeOwner([
    ROOT_NODE,
    labelHash('reverse'),
    deployer.account.address,
  ])
  log('Setting default resolver to PublicResolver for ReverseRegistrar')
  await reverseRegistrar.write.setDefaultResolver([publicResolver.address])
  log('Setting owner of `addr.reverse` to ReverseRegistrar')
  await ensRegistry.write.setSubnodeOwner([
    nodeHash('reverse'),
    labelHash('addr'),
    reverseRegistrar.address,
  ])

  // 5. transfer ownership of root node to Root
  log('Transferring owner of root node to Root')
  await ensRegistry.write.setOwner([ROOT_NODE, root.address])

  return contracts
}
