import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'
import { Token } from "./src/contracts/contract-address.json"

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    react(),
    hardhat({
      project: '../tracking',
      deployments: {
        Packages: {
          0: Token as `0x${string}`
        }
      }
    }),
  ],
})
