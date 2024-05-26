import { http, createConfig } from 'wagmi'
import { avalanche, mainnet, sepolia,bsc } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import {polygon} from "@wagmi/core/chains";



export const config = createConfig({
  chains: [mainnet, sepolia,polygon,avalanche,bsc],
  connectors: [
    injected(),
    // coinbaseWallet({ appName: 'Create Wagmi' }),
    walletConnect({ projectId: '9353c3ac1b348b0cbc10c91a381d00b0' }),
    // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [avalanche.id]: http(),
    [bsc.id]: http(),
    // [tron.id]: http(),
  },
})

