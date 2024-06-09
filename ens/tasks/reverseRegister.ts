import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils'

task('ens:reverse-register', 'Reverse register a name with ReverseRegistrar')
  .addParam('address', 'Address to register to')
  .addParam('name', 'Name to register. Note: include suffix')
  .setAction(async function ({ address, name }, hre) {
    const { reverseRegistrar, publicResolver } =
      await deployAndSetupContracts(hre)
    const [deployer] = await hre.viem.getWalletClients()

    await reverseRegistrar.write.setNameForAddr([
      address,
      deployer.account.address,
      publicResolver.address,
      name,
    ])
  })
