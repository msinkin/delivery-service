import { useNetwork, useSwitchNetwork } from 'wagmi'
import Alert from '../Alert'

export function NetworkSwitcher() {
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()

  return (
    <div>
      <div className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
        Connected to {chain?.name}
      </div>
      {switchNetwork &&
        chains.map((x) =>
          x.id === chain?.id ? null : (
            <button
              key={x.id}
              className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue-900"
              onClick={() => switchNetwork(x.id)}
            >
              {x.name} {isLoading && x.id === pendingChainId && "(switching)"}
            </button>
          ),
        )
      }

      <Alert error={error} />
    </div>
  )
}
