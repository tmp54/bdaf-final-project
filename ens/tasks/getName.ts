import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils'

task('ens:get-name', 'Get the name from an address')
  .addParam('address', 'Account address')
  .setAction(async function ({ address }, hre) {
    const { publicResolver } = await deployAndSetupContracts(hre)

    const name = await publicResolver.read.name([address])
    console.log(name)
  })
