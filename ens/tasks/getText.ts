import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils/deploy'
import { nodeHash } from 'common'

task('ens:get-text', 'Get a text record from a node')
  .addParam('node', 'Node to get. Note: provide original name, i.e. `*.eth`')
  .addParam('key', 'Key to get')
  .setAction(async function ({ node, key }, hre) {
    const { publicResolver } = await deployAndSetupContracts(hre)

    const value = await publicResolver.read.text([nodeHash(node), key])
    console.log(value)
  })
