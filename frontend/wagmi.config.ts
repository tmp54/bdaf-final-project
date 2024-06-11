import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'

const INCLUDE_ENS_CONTRACTS = [
  'ENSRegistry',
  'FIFSRegistrar',
  'ReverseRegistrar',
  'Root',
]

export default defineConfig({
  out: 'modules/wagmi/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../ens',

      artifacts: '.',
      include: [
        'artifacts/contracts/*.sol/*.json',
        `node_modules/@ensdomains/ens-contracts/artifacts/contracts/**/{${INCLUDE_ENS_CONTRACTS.join(',')}}.sol/*.json`,
      ],
    }),
    react(),
  ],
})
