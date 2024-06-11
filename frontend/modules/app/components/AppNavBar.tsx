'use client'

import { Button } from '@/modules/ui/components/button'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export default function AppNavBar() {
  return (
    <nav className='m-auto flex h-[56px] w-full items-center px-[2rem]'>
      <Button variant='ghost' asChild>
        <Link href='/'>
          <div className='app-name text-xl font-bold'>ENS Demo</div>
        </Link>
      </Button>

      <div className='grow' />

      <ConnectButton />
    </nav>
  )
}
