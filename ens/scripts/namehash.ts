import { normalize } from 'viem/ens'
import { labelHash, nodeHash } from '../utils'

const name = process.argv[2]

const normalizedName = normalize(name)
console.log(`normalized: ${normalizedName}`)

const node = nodeHash(normalizedName)
console.log(`node: ${node}`)

const label = labelHash(normalizedName)
console.log(`label: ${label}`)
