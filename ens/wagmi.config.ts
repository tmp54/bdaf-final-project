import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'

const INCLUDE_ENS_CONTRACTS = [
  'ENSRegistry',
  'FIFSRegistrar',
  'ReverseRegistrar',
  'Root',
]

export default defineConfig({
  out: 'wagmi/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '.',

      // not using default 'artifacts/' directory, since `node_modules` won't be accessable
      artifacts: '.',
      include: [
        'artifacts/contracts/*.sol/*.json',
        `node_modules/@ensdomains/ens-contracts/artifacts/contracts/**/{${INCLUDE_ENS_CONTRACTS.join(',')}}.sol/*.json`,
      ],
    }),
  ],
})
