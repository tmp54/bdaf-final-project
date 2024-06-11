import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils/deploy'

task('ens:set-name', 'Set the name to an address')
  .addParam('address', 'Account address')
  .addParam('name', 'Name to be set')
  .setAction(async function ({ address, name }, hre) {
    const { publicResolver } = await deployAndSetupContracts(hre)

    await publicResolver.write.setName([address, name])
  })
