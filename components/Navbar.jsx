import Link from 'next/link'
import React, {useState} from 'react'

export default function Navbar() {
    const [showSidebar, setShowSideBar] = useState(false)
  return (
    <div>
        <nav className='inset-0 fixed h-20 flex items-center lg:px-[75px] px-10 bg-white z-10'>
        <div className='flex gap-10 items-center mr-auto text-gray-500 '>
            <Link href='/'>
               <a className='mr-20'>
               <svg width="73" height="41" viewBox="0 0 73 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.6323 16.6012L47.3172 0.500045H28.7292L30.2045 3.07117C30.8367 4.16706 31.9748 4.7993 33.2393 4.7993H44.8304L51.6165 16.559L44.8304 28.3188H33.745H31.2582L24.2192 40.5H27.2119C28.4763 40.5 29.6144 39.8256 30.2466 38.7719L33.745 32.7023H44.8304L48.3288 38.7719C48.961 39.8678 50.0991 40.5 51.3636 40.5H54.3562L48.5817 30.5527L56.6323 16.6012Z" fill="#020231"/>
                    <path d="M33.5342 16.6011L20.7629 38.7718C20.1307 39.8677 18.9926 40.5 17.7281 40.5H16L29.7829 16.6011L20.4679 0.5H22.196C23.4605 0.5 24.5985 1.17439 25.2308 2.22813L33.5342 16.6011Z" fill="#0077B6"/>
                </svg>
               </a>
            </Link>
           <div className='hidden lg:flex gap-10'>
           <Link href='/features' >Features</Link>
            <Link href='/support' >Support</Link>
            <Link href='/blog' >Blog</Link>
            <Link href='/pricing' >Pricing</Link>
           </div>
        </div>
        <div className='hidden lg:flex items-center gap-6'>
            <Link href='/login'>
                <a className='border text-primary border-primary px-8 py-4 rounded-md'>Login</a>
            </Link>
            <Link href='/try-demo' >
                <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
            </Link>
        </div>
        <div 
        className="lg:hidden -z-50  tham tham-e-squeeze tham-w-8"
        onClick={()=> setShowSideBar(!showSidebar)}
        >
            <div className="tham-box">
                <div className="tham-inner" />
            </div>
        </div>
    </nav>
    <div className={`top-0 fixed h-full w-full z-40  bg-black bg-opacity-10 ease-in-out duration-300 ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
    }`}>
        <div className=' bg-white fixed top-0 z-40 right-0 md:w-3/6 w-5/6 h-full px-7 flex flex-col drop-shadow-2xl ease-in-out duration-300'>
        <div 
        className="lg:hidden -z-50  tham tham-e-squeeze tham-w-8 pt-10"
        onClick={()=> setShowSideBar(!showSidebar)}
        >
            <div className="tham-box">
                <div className="tham-inner" />
            </div>
        </div>
        <ul className='flex flex-col gap-10 pt-10'>
            <Link href='/features' >Features</Link>
            <Link href='/support' >Support</Link>
            <Link href='/blog' >Blog</Link>
            <Link href='/pricing' >Pricing</Link>
            <Link href='/login'>
                <a className='border text-primary border-primary px-8 py-4 rounded-md'>Login</a>
            </Link>
            <Link href='/try-demo' >
                <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
            </Link>
        </ul>
        </div>
    </div>
    </div>
  )
}
