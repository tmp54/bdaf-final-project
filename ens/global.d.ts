declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_SEPOLIA_API_KEY: string
      ALCHEMY_HOLESKY_API_KEY: string

      PRIVATE_KEY: string
    }
  }
}

export {}
