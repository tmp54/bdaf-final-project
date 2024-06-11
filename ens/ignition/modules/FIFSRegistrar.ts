import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import ENSRegistryModule from './ENSRegistry'
import FIFSRegistrarArtifact from '@ensdomains/ens-contracts/artifacts/contracts/registry/FIFSRegistrar.sol/FIFSRegistrar.json'
import { fifsRegistrarAbi } from '../../wagmi/generated'
import { nodeHash } from 'common'

const FIFS_REGISTRAR_ARTIFACT = {
  ...FIFSRegistrarArtifact,
  abi: fifsRegistrarAbi,
}

export default buildModule('FIFSRegistrar', (m) => {
  const { ensRegistry } = m.useModule(ENSRegistryModule)
  const fifsRegistrar = m.contract('FIFSRegistrar', FIFS_REGISTRAR_ARTIFACT, [
    ensRegistry,
    nodeHash('eth'),
  ])

  return { fifsRegistrar }
})
