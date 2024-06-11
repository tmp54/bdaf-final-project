declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ALCHEMY_SEPOLIA_API_KEY: string
      NEXT_PUBLIC_ALCHEMY_HOLESKY_API_KEY: string

      NEXT_PUBLIC_SEPOLIA_ENS_REGISTRY: `0x${string}`
      NEXT_PUBLIC_SEPOLIA_FIFS_REGISTRAR: `0x${string}`
      NEXT_PUBLIC_SEPOLIA_REVERSE_REGISTRAR: `0x${string}`
      NEXT_PUBLIC_SEPOLIA_PUBLIC_RESOLVER: `0x${string}`
      NEXT_PUBLIC_SEPOLIA_ROOT: `0x${string}`

      NEXT_PUBLIC_HOLESKY_ENS_REGISTRY: `0x${string}`
      NEXT_PUBLIC_HOLESKY_FIFS_REGISTRAR: `0x${string}`
      NEXT_PUBLIC_HOLESKY_REVERSE_REGISTRAR: `0x${string}`
      NEXT_PUBLIC_HOLESKY_PUBLIC_RESOLVER: `0x${string}`
      NEXT_PUBLIC_HOLESKY_ROOT: `0x${string}`
    }
  }
}

export {}
