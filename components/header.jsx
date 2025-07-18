import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FolderOpen, PenBox } from 'lucide-react'
import UserMenu from './user-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
  await checkUser();
  return (
    <header className='container mx-auto'>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
       <div // h-16 = 64px
/>

        </Link>
        <div className=' flex items-center gap-4'>
                
            <SignedIn>
              <Link href= "/dashboard#collections">
            <Button  variant="outline" className="flex items-center gap-2">
              <FolderOpen size={18}/>
              <span className='hidden md:inline'> Collections</span></Button>
            </Link>
            </SignedIn>


            <Link href= "/journal/write">
            <Button  variant="journal" className="flex items-center gap-2">
              <PenBox size={18}/>
              <span className='hidden md:inline'> Write New</span></Button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl='/dashboard'> 
                <Button variant= "outline" > Login</Button>
              </SignInButton>
             
            </SignedOut>

            <SignInButton>
              <UserMenu />
            </SignInButton>
        </div>
      </nav>
    </header>
  )
}

export default Header
