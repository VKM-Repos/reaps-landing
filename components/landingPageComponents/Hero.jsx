import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import landing from '@assets/landing.svg'
export default function Hero() {
    return (
        <div className='w-full py-28 lg:px-20 px-10 flex lg:flex-row flex-col lg:justify-between bg-mobileHeroBg lg:bg-white'>
            <div className='lg:w-[700px] lg:mt-[60px]'>

                <p className='font-extrabold text-3xl lg:text-6xl '>Your  ethics approval made easy.</p>
                <svg className='absolute lg:-mt-[71px] -mt-12 lg:ml-[148px] ml-[70px] lg:w-44 w-24' width="150" height="10" viewBox="0 0 120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.0811 2.99884C36.5049 2.99884 25.9458 3.01603 15.3697 2.98656C12.1694 2.97674 8.84937 2.89077 5.80316 2.74096C2.14087 2.56167 0.0702107 2.13677 0.00175663 1.56206C-0.0666974 0.984895 1.8671 0.537898 5.52939 0.36352C9.00343 0.198965 12.8027 0.113004 16.465 0.10318C34.3486 0.0589716 52.215 0.0565157 70.0987 0.0344114C73.3673 0.0294994 76.619 0.00248294 79.8876 2.69095e-05C87.4518 -0.00488515 92.6372 0.663155 92.5858 1.62101C92.5345 2.5764 87.4347 3.40684 79.8876 3.40193C69.0035 3.3921 58.8195 3.68572 47.0811 3.60739C47.0982 3.53862 47.0811 3.07007 47.0811 2.99884Z" fill="#FFFD54" fillOpacity="0.7" />
                    <path d="M74.4948 5.06793C63.9187 5.06793 53.3596 5.08512 42.7834 5.05565C39.5832 5.04583 36.2631 4.95987 33.2169 4.81005C29.5546 4.63076 27.484 4.20587 27.4155 3.63115C27.3471 3.05399 29.2809 2.60699 32.9432 2.43261C36.4172 2.26806 40.2164 2.1821 43.8787 2.17227C61.7624 2.12806 79.6288 2.12561 97.5124 2.1035C100.781 2.09859 104.033 2.07157 107.301 2.06912C114.866 2.06421 120.051 2.73225 120 3.6901C119.948 4.64549 114.848 5.47593 107.301 5.47102C96.4172 5.46119 86.2333 5.75481 74.4948 5.67648C74.512 5.60771 74.4948 5.13916 74.4948 5.06793Z" fill="#FFFD54" fillOpacity="0.7" />
                </svg>
                <p className='hidden lg:block sm:text-md text-sm tracking-wide leading-[30px]  text-gray-500 lg:w-[550px] w-[450px]  my-[50px]'>
                    REAPS is an application that has been designed to facilitate the easy submission, processing, tracking and granting of ethics approval to individuals applying for <br /> research ethics approval from Institutional or Ethical Review Boards.
                </p>
                <p className='lg:hidden sm:text-lg text-xs tracking-wide leading-[25px]  text-gray-500  lg:my-[50px] my-[30px] w-[300px]'>
                    REAPS is an application that has been designed to facilitate the easy submission, processing, tracking and granting of ethics approval to individuals applying for  research ethics approval  from Institutional or Ethical Review Boards.
                </p>
                <div className='hidden lg:flex'>
                    <Link href='/try-demo' >
                        <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
                    </Link>
                </div>
            </div>
            <div className='lg:absolute lg:right-[5%] lg:w-[580px] lg:-mt-10 -mt-5'>
                <Image src={landing} />
            </div>
            <div className='flex justify-center'>
                <Link href='/try-demo'>
                    <a className='lg:hidden bg-primary px-32 py-4 text-white rounded-md'>Try Demo</a>
                </Link>
            </div>
        </div>
    )
}
