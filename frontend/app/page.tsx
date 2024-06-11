'use client'

import { getDeployments } from '@/ens-deployments'
import useSearchParamsName from '@/modules/app/hooks/useSearchParamsName'
import useSyncSearchParams from '@/modules/app/hooks/useSyncSearchParams'
import { Button } from '@/modules/ui/components/button'
import { Input } from '@/modules/ui/components/input'
import {
  useReadEnsRegistryOwner,
  useWriteFifsRegistrarRegister,
} from '@/modules/wagmi/generated'
import { useDebounce } from '@uidotdev/usehooks'
import { labelHash, nodeHash } from 'common'
import Link from 'next/link'
import { useState } from 'react'
import { zeroAddress, zeroHash } from 'viem'
import { useAccount } from 'wagmi'

export default function Home() {
  const { chain, address } = useAccount()

  const { name, parsedName, isNameValid } = useSearchParamsName()

  const [input, setInput] = useState(name)

  const debouncedInput = useDebounce(input, 500)
  useSyncSearchParams('name', debouncedInput)

  const { ensRegistry, fifsRegistrar } = getDeployments(chain?.id)
  const { data: owner, refetch } = useReadEnsRegistryOwner({
    address: ensRegistry,
    args: [isNameValid ? nodeHash(`${parsedName}.eth`) : zeroHash],
    query: {
      staleTime: 0,
    },
  })
  const isOwner = owner === address

  const { writeContractAsync: register } = useWriteFifsRegistrarRegister()

  function handleSearch() {
    refetch()
  }

  async function handleRegister() {
    await register({
      address: fifsRegistrar,
      args: [labelHash(input), address!],
      chainId: chain!.id,
    })
  }

  return (
    <div className='h-[calc(100vh_-_56px)] content-center'>
      <div className='m-auto grid max-w-md gap-2'>
        <h1 className='app-name text-center text-3xl font-bold'>ENS Demo</h1>

        <div className='flex gap-2 [&>div]:grow'>
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder='Search for a name'
            endAdornment={<span>.eth</span>}
          />

          <Button onClick={handleSearch}>Search</Button>
        </div>

        <div className='flex h-[40px] justify-center'>
          {name !== '' && owner === zeroAddress && (
            <Button onClick={handleRegister} className='hidden'>
              Register
            </Button>
          )}

          {(owner || zeroAddress) !== zeroAddress && isOwner && (
            <Button asChild>
              <Link href={`/edit?name=${name}.eth`}>Edit</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
