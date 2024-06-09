import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import ENSRegistryModule from './ENSRegistry'
import RootArtifact from '@ensdomains/ens-contracts/artifacts/contracts/root/Root.sol/Root.json'
import { rootAbi } from '../../wagmi/generated'

const ROOT_ARTIFACT = {
  ...RootArtifact,
  abi: rootAbi,
}

export default buildModule('Root', (m) => {
  const { ensRegistry } = m.useModule(ENSRegistryModule)
  const root = m.contract('Root', ROOT_ARTIFACT, [ensRegistry])

  return { root }
})
