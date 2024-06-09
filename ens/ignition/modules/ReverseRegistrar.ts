import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import ENSRegistryModule from './ENSRegistry'
import ReverseRegistrarArtifact from '@ensdomains/ens-contracts/artifacts/contracts/reverseRegistrar/ReverseRegistrar.sol/ReverseRegistrar.json'
import { reverseRegistrarAbi } from '../../wagmi/generated'

const REVERSE_REGISTRAR_ARTIFACT = {
  ...ReverseRegistrarArtifact,
  abi: reverseRegistrarAbi,
}

export default buildModule('ReverseRegistrar', (m) => {
  const { ensRegistry } = m.useModule(ENSRegistryModule)
  const reverseRegistrar = m.contract(
    'ReverseRegistrar',
    REVERSE_REGISTRAR_ARTIFACT,
    [ensRegistry],
  )

  return { reverseRegistrar }
})
