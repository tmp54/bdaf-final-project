import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import { sepolia, holesky } from 'wagmi/chains'

const ALCHEMY_SEPOLIA_HTTP = `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_API_KEY}`
const ALCHEMY_HOLESKY_HTTP = `https://eth-holesky.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_HOLESKY_API_KEY}`

export const config = getDefaultConfig({
  appName: 'ENS Demo',
  // FIXME: seems promising, :peepoClap:
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia, holesky],
  transports: {
    [sepolia.id]: http(ALCHEMY_SEPOLIA_HTTP),
    [holesky.id]: http(ALCHEMY_HOLESKY_HTTP),
  },
})
