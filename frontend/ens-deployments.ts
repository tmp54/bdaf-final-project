import { sepolia, holesky } from 'viem/chains'

const ensDeployments = {
  [sepolia.id]: {
    ensRegistry: process.env.NEXT_PUBLIC_SEPOLIA_ENS_REGISTRY,
    fifsRegistrar: process.env.NEXT_PUBLIC_SEPOLIA_FIFS_REGISTRAR,
    reverseRegistrar: process.env.NEXT_PUBLIC_SEPOLIA_REVERSE_REGISTRAR,
    publicResolver: process.env.NEXT_PUBLIC_SEPOLIA_PUBLIC_RESOLVER,
    root: process.env.NEXT_PUBLIC_SEPOLIA_ROOT,
  },
  [holesky.id]: {
    ensRegistry: process.env.NEXT_PUBLIC_HOLESKY_ENS_REGISTRY,
    fifsRegistrar: process.env.NEXT_PUBLIC_HOLESKY_FIFS_REGISTRAR,
    reverseRegistrar: process.env.NEXT_PUBLIC_HOLESKY_REVERSE_REGISTRAR,
    publicResolver: process.env.NEXT_PUBLIC_HOLESKY_PUBLIC_RESOLVER,
    root: process.env.NEXT_PUBLIC_HOLESKY_ROOT,
  },
}

export function getDeployments(chainId: number | undefined) {
  return ensDeployments[chainId as unknown as keyof typeof ensDeployments] || {}
}
