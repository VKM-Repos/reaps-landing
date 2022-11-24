import React from 'react'
import Image from 'next/image'
import landing2 from '@assets/landing2.svg'
export default function ApplicationProcessSection() {
  return (
    <>
      <div className='lg:px-20 px-12 pb-[150px] gap-[50px] hidden lg:flex bg-white'>
        <div className='hidden lg:block'>
          <Image src={landing2} />
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-4xl lg:text-6xl font-medium my-[25px]'>Research Ethics <br /> Application System</p>
          <p className='text-md tracking-wide font-light leading-[35px] text-black lg:w-[700px]  '>
            REAPS provides services to academic and research institutions where research studies are conducted regularly.<br />
            Ethics approval MUST be obtained before any research involving human participants, identifiable personal data and/or animals is undertaken. This process must start early in the planning phase of a project. Ethical application should be submitted to the appropriate level based on the application guidelines for the country and the institution where the research is being conducted.
          </p>
        </div>
      </div>

      <div className='lg:hidden px-10 my-[123px]'>
        <p className='text-3xl font-medium'>
          Research Ethics Application System
        </p>
        <div className='grid gap-[54px] mt-[32px]'>
          <div>
            <p className='bg-black text-white w-[30px] h-[30px] flex justify-center items-center rounded-full text-lg mb-[16px]'>1</p>
            <p>REAPS provides services to academic and research institutions where research studies are being conducted regularly.</p>
          </div>
          <div>
            <p className='bg-black text-white w-[30px] h-[30px] flex justify-center items-center rounded-full text-lg mb-[16px]'>2</p>
            <p>Ethics approval must be obtained before any research involving human participants, identifiable personal data and/or animals is undertaken. This process must start early in the planning phase of a project. </p>
          </div>
          <div>
            <p className='bg-black text-white w-[30px] h-[30px] flex justify-center items-center rounded-full text-lg mb-[16px]'>3</p>
            <p>Ethical application should be submitted to the appropriate level based on the application guidelines for the country and the institution where the research is being conducted.</p>
          </div>
        </div>
      </div>
    </>
  )
}
