import { Popover } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { useAccount, useBalance, useDisconnect } from 'wagmi'
import { NetworkSwitcher } from '../NetworkSwitcher';

const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
    },
]

export default function Profile() {
    const { t } = useTranslation();
    const { address } = useAccount();
    const { data } = useBalance({
        address,
        watch: true,
    })
    const { disconnect } = useDisconnect()

    return (
        <Popover className="relative inline-block text-left text-blue-500">
            <Popover.Button className="w-48 py-2 overflow-hidden text-ellipsis focus:outline-none text-base font-semibold leading-6 text-blue-500">
                {address} {data?.formatted} {data?.symbol}
            </Popover.Button>
            <Popover.Panel className="z-10 absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <NetworkSwitcher />
                <button
                    className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-blue-900"
                    onClick={() => { disconnect() }}
                >
                    Disconnect
                </button>
            </Popover.Panel>
        </Popover>
    )
}