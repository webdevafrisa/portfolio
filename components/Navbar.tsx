import Link from 'next/link'
import React from 'react'
import { DiscordIcon, GitHubIcon, SocialLink, XIcon } from './Footer'

type Props = {}

const Navbar = (props: Props) => {
  return (

<header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm   ">
  <nav className="mt-4 py-4 relative  max-w-[85rem] w-full bg-white border border-gray-200 rounded-[2rem] mx-2 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto backdrop-blur-md bg-white/30">
    <div className="px-4 md:px-0 flex justify-between items-center">
      {/* <!-- Logo --> */}
      
        <Link className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
   Dev-Luka
        </Link>
     
      {/* <!-- End Logo --> */}

      <div className="md:hidden">
        {/* <!-- Toggle Button --> */}
        <button type="button" className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
          <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        {/* <!-- End Toggle Button --> */}
      </div>
    </div>

    <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300   md:block " aria-labelledby="hs-navbar-header-floating-collapse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
        <Link className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none " href="#faq" aria-current="page">FAQ</Link>
        <Link className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none " href="#whyUs">Why Us</Link>
        <Link className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none " href="#work">Our Work</Link>

      </div>
    </div>
    <div>
    <div className="flex gap-4">
        <SocialLink href="https://twitter.com/justansub" icon={XIcon}>
          Follow me on X
        </SocialLink>
        <SocialLink href="http://github.com/ansub" icon={GitHubIcon}>
          Follow me on GitHub
        </SocialLink>
        <SocialLink href="https://discord.gg/P8GXYyH3ZU" icon={DiscordIcon}>
          Join the Discord
        </SocialLink>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Navbar