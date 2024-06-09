import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import ENSRegistryModule from './ENSRegistry'

export default buildModule('PublicResolver', (m) => {
  const { ensRegistry } = m.useModule(ENSRegistryModule)
  const publicResolver = m.contract('PublicResolver', [ensRegistry])

  return { publicResolver }
})
