'use client'

import { getDeployments } from '@/ens-deployments'
import useSearchParamsName from '@/modules/app/hooks/useSearchParamsName'
import EditRecordsCard from '@/modules/ens/components/EditRecordsCard'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/modules/ui/components/alert'
import { Button } from '@/modules/ui/components/button'
import {
  useReadEnsRegistryOwner,
  useReadPublicResolverText,
} from '@/modules/wagmi/generated'
import { nodeHash } from 'common'
import { ChevronLeftIcon, CircleAlertIcon, LoaderIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { zeroHash } from 'viem'
import { useAccount } from 'wagmi'

export default function EditPage() {
  const { address, chain } = useAccount()

  const { name, parsedName, isNameValid } = useSearchParamsName()

  const node = isNameValid ? nodeHash(parsedName) : zeroHash

  const { ensRegistry, publicResolver } = getDeployments(chain?.id)
  const { data: owner } = useReadEnsRegistryOwner({
    address: ensRegistry,
    args: [node],
    query: {
      staleTime: 0,
    },
  })
  const isOwner = owner === address

  const { data: textGitHub, isLoading: isGitHubLoading } =
    useReadPublicResolverText({
      address: publicResolver,
      args: [node, 'com.github'],
      chainId: chain!.id,
    })
  const { data: textTwitter, isLoading: isTwitterLoading } =
    useReadPublicResolverText({
      address: publicResolver,
      args: [node, 'com.twitter'],
      chainId: chain!.id,
    })

  useEffect(() => {
    console.log({ textGitHub, textTwitter, isGitHubLoading, isTwitterLoading })
  }, [textGitHub, textTwitter, isGitHubLoading, isTwitterLoading])

  const [allResolved, setAllResolved] = useState(false)
  useEffect(() => {
    if (!isGitHubLoading && !isTwitterLoading) {
      setAllResolved(true)
    }
  }, [isGitHubLoading, isTwitterLoading])

  return (
    <div className='h-[calc(100vh_-_56px)] content-center'>
      <div className='m-auto grid max-w-md gap-2'>
        {allResolved && (
          <Button variant='outline' asChild className='w-min'>
            <Link href='/'>
              <ChevronLeftIcon className='mr-2 h-4 w-4' />
              Go back
            </Link>
          </Button>
        )}
        {!allResolved && (
          <div className='m-auto grid max-w-md gap-4 text-center text-muted-foreground'>
            <LoaderIcon className='m-auto h-12 w-12 animate-spin' />
            <div>Loading records of {name}...</div>
          </div>
        )}
        {isNameValid && allResolved && (
          <EditRecordsCard
            initialValues={{
              name: name.replace(/\.eth$/, ''),
              address: owner,
              text: [
                ...(textGitHub
                  ? [{ key: 'com.github', value: textGitHub }]
                  : []),
                ...(textTwitter
                  ? [{ key: 'com.twitter', value: textTwitter }]
                  : []),
              ],
            }}
            readonly={!isOwner}
          />
        )}
        {(!isNameValid || !isOwner) && allResolved && (
          <Alert variant='destructive'>
            <CircleAlertIcon className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <code>{name}</code> not yet registered or you are not the owner
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
