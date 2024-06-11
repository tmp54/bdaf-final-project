import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENSRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ensRegistryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'label',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewResolver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'ttl', internalType: 'uint64', type: 'uint64', indexed: false },
    ],
    name: 'NewTTL',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'resolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'setResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'setSubnodeOwner',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setSubnodeRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setTTL',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ttl',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FIFSRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fifsRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'ensAddr', internalType: 'contract ENS', type: 'address' },
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NameResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nameResolverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'name', internalType: 'string', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PublicResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const publicResolverAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_ens', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'a', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AddrChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'coinType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAddress',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'indexedKey',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'TextChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'addr',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'coinType', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addr',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'coinType', internalType: 'uint256', type: 'uint256' },
      { name: 'a', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setAddr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'a', internalType: 'address', type: 'address' },
    ],
    name: 'setAddr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newName', internalType: 'string', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setText',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'text',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reverseRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'ensAddr', internalType: 'contract ENS', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'controller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ControllerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'contract NameResolver',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DefaultResolverChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address', indexed: true },
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'ReverseClaimed',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimForAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimWithResolver',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'controllers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultResolver',
    outputs: [
      { name: '', internalType: 'contract NameResolver', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ens',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'node',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'controller', internalType: 'address', type: 'address' },
      { name: 'enabled', internalType: 'bool', type: 'bool' },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'resolver', internalType: 'address', type: 'address' }],
    name: 'setDefaultResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'setName',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
    ],
    name: 'setNameForAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Root
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rootAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_ens', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'controller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ControllerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'label',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'TLDLocked',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'controllers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ens',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'label', internalType: 'bytes32', type: 'bytes32' }],
    name: 'lock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'locked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'controller', internalType: 'address', type: 'address' },
      { name: 'enabled', internalType: 'bool', type: 'bool' },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'resolver', internalType: 'address', type: 'address' }],
    name: 'setResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'setSubnodeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__
 */
export const useReadEnsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadEnsRegistryIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ensRegistryAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadEnsRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"recordExists"`
 */
export const useReadEnsRegistryRecordExists =
  /*#__PURE__*/ createUseReadContract({
    abi: ensRegistryAbi,
    functionName: 'recordExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"resolver"`
 */
export const useReadEnsRegistryResolver = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  functionName: 'resolver',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"ttl"`
 */
export const useReadEnsRegistryTtl = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  functionName: 'ttl',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__
 */
export const useWriteEnsRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteEnsRegistrySetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setOwner"`
 */
export const useWriteEnsRegistrySetOwner = /*#__PURE__*/ createUseWriteContract(
  { abi: ensRegistryAbi, functionName: 'setOwner' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setRecord"`
 */
export const useWriteEnsRegistrySetRecord =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    functionName: 'setRecord',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setResolver"`
 */
export const useWriteEnsRegistrySetResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useWriteEnsRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useWriteEnsRegistrySetSubnodeRecord =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    functionName: 'setSubnodeRecord',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setTTL"`
 */
export const useWriteEnsRegistrySetTtl = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  functionName: 'setTTL',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__
 */
export const useSimulateEnsRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: ensRegistryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateEnsRegistrySetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setOwner"`
 */
export const useSimulateEnsRegistrySetOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setRecord"`
 */
export const useSimulateEnsRegistrySetRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setRecord',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setResolver"`
 */
export const useSimulateEnsRegistrySetResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useSimulateEnsRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useSimulateEnsRegistrySetSubnodeRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setSubnodeRecord',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setTTL"`
 */
export const useSimulateEnsRegistrySetTtl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    functionName: 'setTTL',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__
 */
export const useWatchEnsRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ensRegistryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchEnsRegistryApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewOwner"`
 */
export const useWatchEnsRegistryNewOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    eventName: 'NewOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewResolver"`
 */
export const useWatchEnsRegistryNewResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    eventName: 'NewResolver',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewTTL"`
 */
export const useWatchEnsRegistryNewTtlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    eventName: 'NewTTL',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchEnsRegistryTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fifsRegistrarAbi}__
 */
export const useWriteFifsRegistrar = /*#__PURE__*/ createUseWriteContract({
  abi: fifsRegistrarAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fifsRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const useWriteFifsRegistrarRegister =
  /*#__PURE__*/ createUseWriteContract({
    abi: fifsRegistrarAbi,
    functionName: 'register',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fifsRegistrarAbi}__
 */
export const useSimulateFifsRegistrar = /*#__PURE__*/ createUseSimulateContract(
  { abi: fifsRegistrarAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fifsRegistrarAbi}__ and `functionName` set to `"register"`
 */
export const useSimulateFifsRegistrarRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fifsRegistrarAbi,
    functionName: 'register',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useWriteNameResolver = /*#__PURE__*/ createUseWriteContract({
  abi: nameResolverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteNameResolverSetName = /*#__PURE__*/ createUseWriteContract(
  { abi: nameResolverAbi, functionName: 'setName' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useSimulateNameResolver = /*#__PURE__*/ createUseSimulateContract({
  abi: nameResolverAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateNameResolverSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__
 */
export const useReadPublicResolver = /*#__PURE__*/ createUseReadContract({
  abi: publicResolverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"addr"`
 */
export const useReadPublicResolverAddr = /*#__PURE__*/ createUseReadContract({
  abi: publicResolverAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"name"`
 */
export const useReadPublicResolverName = /*#__PURE__*/ createUseReadContract({
  abi: publicResolverAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadPublicResolverRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: publicResolverAbi,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPublicResolverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: publicResolverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"text"`
 */
export const useReadPublicResolverText = /*#__PURE__*/ createUseReadContract({
  abi: publicResolverAbi,
  functionName: 'text',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link publicResolverAbi}__
 */
export const useWritePublicResolver = /*#__PURE__*/ createUseWriteContract({
  abi: publicResolverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useWritePublicResolverClearRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: publicResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setAddr"`
 */
export const useWritePublicResolverSetAddr =
  /*#__PURE__*/ createUseWriteContract({
    abi: publicResolverAbi,
    functionName: 'setAddr',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useWritePublicResolverSetName =
  /*#__PURE__*/ createUseWriteContract({
    abi: publicResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setText"`
 */
export const useWritePublicResolverSetText =
  /*#__PURE__*/ createUseWriteContract({
    abi: publicResolverAbi,
    functionName: 'setText',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link publicResolverAbi}__
 */
export const useSimulatePublicResolver =
  /*#__PURE__*/ createUseSimulateContract({ abi: publicResolverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useSimulatePublicResolverClearRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: publicResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setAddr"`
 */
export const useSimulatePublicResolverSetAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: publicResolverAbi,
    functionName: 'setAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulatePublicResolverSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: publicResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link publicResolverAbi}__ and `functionName` set to `"setText"`
 */
export const useSimulatePublicResolverSetText =
  /*#__PURE__*/ createUseSimulateContract({
    abi: publicResolverAbi,
    functionName: 'setText',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__
 */
export const useWatchPublicResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: publicResolverAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__ and `eventName` set to `"AddrChanged"`
 */
export const useWatchPublicResolverAddrChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: publicResolverAbi,
    eventName: 'AddrChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__ and `eventName` set to `"AddressChanged"`
 */
export const useWatchPublicResolverAddressChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: publicResolverAbi,
    eventName: 'AddressChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__ and `eventName` set to `"NameChanged"`
 */
export const useWatchPublicResolverNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: publicResolverAbi,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__ and `eventName` set to `"TextChanged"`
 */
export const useWatchPublicResolverTextChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: publicResolverAbi,
    eventName: 'TextChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link publicResolverAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchPublicResolverVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: publicResolverAbi,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useReadReverseRegistrar = /*#__PURE__*/ createUseReadContract({
  abi: reverseRegistrarAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"controllers"`
 */
export const useReadReverseRegistrarControllers =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    functionName: 'controllers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"defaultResolver"`
 */
export const useReadReverseRegistrarDefaultResolver =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    functionName: 'defaultResolver',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"ens"`
 */
export const useReadReverseRegistrarEns = /*#__PURE__*/ createUseReadContract({
  abi: reverseRegistrarAbi,
  functionName: 'ens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"node"`
 */
export const useReadReverseRegistrarNode = /*#__PURE__*/ createUseReadContract({
  abi: reverseRegistrarAbi,
  functionName: 'node',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"owner"`
 */
export const useReadReverseRegistrarOwner = /*#__PURE__*/ createUseReadContract(
  { abi: reverseRegistrarAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useWriteReverseRegistrar = /*#__PURE__*/ createUseWriteContract({
  abi: reverseRegistrarAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteReverseRegistrarClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const useWriteReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'claimForAddr',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const useWriteReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const useWriteReverseRegistrarSetController =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'setController',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const useWriteReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteReverseRegistrarSetName =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const useWriteReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useSimulateReverseRegistrar =
  /*#__PURE__*/ createUseSimulateContract({ abi: reverseRegistrarAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateReverseRegistrarClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForAddr"`
 */
export const useSimulateReverseRegistrarClaimForAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'claimForAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const useSimulateReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setController"`
 */
export const useSimulateReverseRegistrarSetController =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'setController',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const useSimulateReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateReverseRegistrarSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const useSimulateReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useWatchReverseRegistrarEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: reverseRegistrarAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ControllerChanged"`
 */
export const useWatchReverseRegistrarControllerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    eventName: 'ControllerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"DefaultResolverChanged"`
 */
export const useWatchReverseRegistrarDefaultResolverChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    eventName: 'DefaultResolverChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchReverseRegistrarOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ReverseClaimed"`
 */
export const useWatchReverseRegistrarReverseClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    eventName: 'ReverseClaimed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__
 */
export const useReadRoot = /*#__PURE__*/ createUseReadContract({ abi: rootAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"controllers"`
 */
export const useReadRootControllers = /*#__PURE__*/ createUseReadContract({
  abi: rootAbi,
  functionName: 'controllers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"ens"`
 */
export const useReadRootEns = /*#__PURE__*/ createUseReadContract({
  abi: rootAbi,
  functionName: 'ens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"locked"`
 */
export const useReadRootLocked = /*#__PURE__*/ createUseReadContract({
  abi: rootAbi,
  functionName: 'locked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"owner"`
 */
export const useReadRootOwner = /*#__PURE__*/ createUseReadContract({
  abi: rootAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadRootSupportsInterface = /*#__PURE__*/ createUseReadContract(
  { abi: rootAbi, functionName: 'supportsInterface' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__
 */
export const useWriteRoot = /*#__PURE__*/ createUseWriteContract({
  abi: rootAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"lock"`
 */
export const useWriteRootLock = /*#__PURE__*/ createUseWriteContract({
  abi: rootAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteRootRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rootAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setController"`
 */
export const useWriteRootSetController = /*#__PURE__*/ createUseWriteContract({
  abi: rootAbi,
  functionName: 'setController',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setResolver"`
 */
export const useWriteRootSetResolver = /*#__PURE__*/ createUseWriteContract({
  abi: rootAbi,
  functionName: 'setResolver',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useWriteRootSetSubnodeOwner = /*#__PURE__*/ createUseWriteContract(
  { abi: rootAbi, functionName: 'setSubnodeOwner' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteRootTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rootAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__
 */
export const useSimulateRoot = /*#__PURE__*/ createUseSimulateContract({
  abi: rootAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"lock"`
 */
export const useSimulateRootLock = /*#__PURE__*/ createUseSimulateContract({
  abi: rootAbi,
  functionName: 'lock',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateRootRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rootAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setController"`
 */
export const useSimulateRootSetController =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rootAbi,
    functionName: 'setController',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setResolver"`
 */
export const useSimulateRootSetResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rootAbi,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useSimulateRootSetSubnodeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rootAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rootAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateRootTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rootAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rootAbi}__
 */
export const useWatchRootEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: rootAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rootAbi}__ and `eventName` set to `"ControllerChanged"`
 */
export const useWatchRootControllerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rootAbi,
    eventName: 'ControllerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rootAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchRootOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rootAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rootAbi}__ and `eventName` set to `"TLDLocked"`
 */
export const useWatchRootTldLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rootAbi,
    eventName: 'TLDLocked',
  })
