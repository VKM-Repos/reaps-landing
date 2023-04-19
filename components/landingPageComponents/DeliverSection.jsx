import React from 'react'
import Link from 'next/link'

export default function DeliverSection() {
  return (
    <div className=' bg-[#FFFFFF] mt-[200px]'>
      <p className='flex justify-center lg:text-lg text-sm'>Deliver in a secure and organized way with REAPS </p>
      <div className='flex justify-center mt-[48px] mb-[178px]'>
        <Link href='/try-demo' >
          <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
        </Link>
      </div>
    </div>
  )
}
