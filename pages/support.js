import React from 'react'
import Link from 'next/link'
import SupportPageHero from 'components/supportPageComponents/SupportHero'
import Categories from 'components/supportPageComponents/Categories'
import HowTo from 'components/supportPageComponents/HowTo'
export default function support() {
  return (
    <div>
      <SupportPageHero />
      <Categories />
      <HowTo />
      <div className=' bg-[#FFFFFF] lg:mt-[50px] mt-[30px]'>
        <p className='flex justify-center lg:text-lg text-md font-semibold'>Take your ethics system to the next level</p>
        <p className='flex justify-center lg:text-md text-sm mt-3'>Start using REAPS Now!!!</p>
        <div className='flex justify-center lg:mt-[48px] mt-[25px] lg:mb-[178px] mb-[100px]'>
          <Link href='/try-demo' >
            <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
