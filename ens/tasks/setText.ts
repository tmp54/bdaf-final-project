import { task } from 'hardhat/config'
import { deployAndSetupContracts } from '../utils/deploy'
import { nodeHash } from 'common'

task('ens:set-text', 'Set a text record to a node')
  .addParam('node', 'Node to set. Note: provide original name, i.e. `*.eth`')
  .addParam('key', 'Key to be set')
  .addParam('value', 'Text value to be set')
  .setAction(async function ({ node, key, value }, hre) {
    const { publicResolver } = await deployAndSetupContracts(hre)

    await publicResolver.write.setText([nodeHash(node), key, value])
  })
