import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import ENSRegistryArtifact from '@ensdomains/ens-contracts/artifacts/contracts/registry/ENSRegistry.sol/ENSRegistry.json'
import { ensRegistryAbi } from '../../wagmi/generated'

const ENS_REGISTRY_ARTIFACT = {
  ...ENSRegistryArtifact,
  abi: ensRegistryAbi,
}

export default buildModule('ENSRegistry', (m) => {
  const ensRegistry = m.contract('ENSRegistry', ENS_REGISTRY_ARTIFACT)

  return { ensRegistry }
})
