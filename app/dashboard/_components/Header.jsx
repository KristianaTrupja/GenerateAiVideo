import React from 'react'
import Image from 'next/image'
import { Button } from '/components/ui/button'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='p-5 flex items-center justify-between shadow-md z-10'>
        <div className='flex gap-3 items-center'>
        <Image src={"/logo.svg"} width={30} height={30} alt='logo'/>
        <h2 className='font-bold text-xl'>Ai Short Vid</h2>
        </div>
 <div className='flex gap-3 items-center'>
    <Button>Dashboard</Button>
    <UserButton/>
 </div>
    </div>
  )
}

export default Header
