'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { config } from '@/modules/wagmi/config'
import AppDisclaimer from './AppDisclaimer'

const queryClient = new QueryClient()

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={sepolia}
          appInfo={{ appName: 'ENS Demo', disclaimer: AppDisclaimer }}
        >
          {children}
        </RainbowKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
