import { configureChains, createConfig } from 'wagmi'
import { hardhat, mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    hardhat
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default.http[0]
      }),
    }),
  ],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})
