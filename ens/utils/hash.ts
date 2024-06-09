import { keccak256, toBytes } from 'viem'
import { namehash, normalize } from 'viem/ens'

export const nodeHash = (name: string) => namehash(normalize(name))
export const labelHash = (name: string) => keccak256(toBytes(normalize(name)))
