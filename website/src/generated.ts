// Generated by @wagmi/cli@1.2.0 on 19.06.2023 at 10:03:49
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Packages
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const packagesABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'packageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'status',
        internalType: 'enum Packages.OrderStatus',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'time',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Delivery',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
      { name: 'weight', internalType: 'uint256', type: 'uint256' },
      { name: 'worth', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createPackage',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'packageId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPackage',
    outputs: [
      {
        name: '',
        internalType: 'struct Packages.Package',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'from', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'string', type: 'string' },
          { name: 'weight', internalType: 'uint256', type: 'uint256' },
          { name: 'worth', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'packageId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'status',
        internalType: 'enum Packages.OrderStatus',
        type: 'uint8',
      },
    ],
    name: 'updatePackageStatus',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link packagesABI}__.
 */
export function usePackagesRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof packagesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: packagesABI,
    ...config,
  } as UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"getPackage"`.
 */
export function usePackagesGetPackage<
  TFunctionName extends 'getPackage',
  TSelectData = ReadContractResult<typeof packagesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: packagesABI,
    functionName: 'getPackage',
    ...config,
  } as UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"owner"`.
 */
export function usePackagesOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof packagesABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: packagesABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof packagesABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link packagesABI}__.
 */
export function usePackagesWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof packagesABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof packagesABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof packagesABI, TFunctionName, TMode>({
    abi: packagesABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"createPackage"`.
 */
export function usePackagesCreatePackage<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof packagesABI,
          'createPackage'
        >['request']['abi'],
        'createPackage',
        TMode
      > & { functionName?: 'createPackage' }
    : UseContractWriteConfig<typeof packagesABI, 'createPackage', TMode> & {
        abi?: never
        functionName?: 'createPackage'
      } = {} as any,
) {
  return useContractWrite<typeof packagesABI, 'createPackage', TMode>({
    abi: packagesABI,
    functionName: 'createPackage',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"updatePackageStatus"`.
 */
export function usePackagesUpdatePackageStatus<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof packagesABI,
          'updatePackageStatus'
        >['request']['abi'],
        'updatePackageStatus',
        TMode
      > & { functionName?: 'updatePackageStatus' }
    : UseContractWriteConfig<
        typeof packagesABI,
        'updatePackageStatus',
        TMode
      > & {
        abi?: never
        functionName?: 'updatePackageStatus'
      } = {} as any,
) {
  return useContractWrite<typeof packagesABI, 'updatePackageStatus', TMode>({
    abi: packagesABI,
    functionName: 'updatePackageStatus',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link packagesABI}__.
 */
export function usePreparePackagesWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof packagesABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: packagesABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof packagesABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"createPackage"`.
 */
export function usePreparePackagesCreatePackage(
  config: Omit<
    UsePrepareContractWriteConfig<typeof packagesABI, 'createPackage'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: packagesABI,
    functionName: 'createPackage',
    ...config,
  } as UsePrepareContractWriteConfig<typeof packagesABI, 'createPackage'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link packagesABI}__ and `functionName` set to `"updatePackageStatus"`.
 */
export function usePreparePackagesUpdatePackageStatus(
  config: Omit<
    UsePrepareContractWriteConfig<typeof packagesABI, 'updatePackageStatus'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: packagesABI,
    functionName: 'updatePackageStatus',
    ...config,
  } as UsePrepareContractWriteConfig<typeof packagesABI, 'updatePackageStatus'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link packagesABI}__.
 */
export function usePackagesEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof packagesABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: packagesABI,
    ...config,
  } as UseContractEventConfig<typeof packagesABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link packagesABI}__ and `eventName` set to `"Delivery"`.
 */
export function usePackagesDeliveryEvent(
  config: Omit<
    UseContractEventConfig<typeof packagesABI, 'Delivery'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: packagesABI,
    eventName: 'Delivery',
    ...config,
  } as UseContractEventConfig<typeof packagesABI, 'Delivery'>)
}
