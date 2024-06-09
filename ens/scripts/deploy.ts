import hre from 'hardhat'
import { deployAndSetupContracts } from '../utils'

const main = deployAndSetupContracts

main(hre, { verbose: true, initialize: true })
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
