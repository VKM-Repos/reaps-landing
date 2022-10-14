import React from 'react'
import Image from 'next/image'
import landing2 from '@assets/landing2.svg'
export default function ApplicationProcessSection() {
  return (
    <section className='lg:px-[98px] px-12 pb-[150px] gap-[89px] flex bg-[#ffffff] justify-center items-center'>
        <div className='hidden lg:block'>
            <Image src={landing2} width='300' hidden='300' />
        </div>

        <div className='lg:w-2/3'>
            <p className='text-4xl lg:text-7xl  py-[32px]'>Research Ethics Application System</p>
            <p className='text-sm tracking-wide leading-8 text-gray-500 '>
            REAPS provides services to academic and research institutions where research studies are conducted regularly.
            Ethics approval MUST be obtained before any research involving human participants, identifiable personal data and/or animals is undertaken. This process must start early in the planning phase of a project. Ethical application should be submitted to the appropriate level based on the application guidelines for the country and the institution where the research is being conducted.
            </p>
        </div>
    </section>
  )
}
