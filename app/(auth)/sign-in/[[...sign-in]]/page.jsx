import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh]'>
<div><Image src={'/login.avif'} width={500} height={500} className='object-contain w-full h-full' alt="image"/></div>
<div className='flex justify-center items-center h-screen'><SignIn /></div>
      
    </div>
  )
}