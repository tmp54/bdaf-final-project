import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils/deploy'
import { labelHash } from 'common'

task('ens:register', 'Register a name with FIFSRegistrar')
  .addParam('name', 'Name to register. Note: `<name>.eth`')
  .setAction(async function ({ name }, hre) {
    const { fifsRegistrar } = await deployAndSetupContracts(hre)
    const [deployer] = await hre.viem.getWalletClients()

    await fifsRegistrar.write.register([
      labelHash(name),
      deployer.account.address,
    ])
  })
