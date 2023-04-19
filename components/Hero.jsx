import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import landing from '@assets/landing.svg'
export default function Hero() {
  return (
    <div className='h-screen w-screen bg-heroBg flex items-center pl-[75px] pr-[50px] pt-10'>
        <div className='w-2/3 px-3 -mt-[100px]'>
            <p className='font-bold text-7xl '>
            <span className='flex flex-col'>Your  ethics approval
                <svg className='ml-40' width="232" height="11" viewBox="0 0 232 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M91.0234 5.79776C70.5761 5.79776 50.1619 5.83099 29.7147 5.77401C23.5276 5.75502 17.1088 5.58883 11.2194 5.29918C4.13901 4.95255 0.135741 4.13109 0.00339615 3.01999C-0.128948 1.90413 3.60972 1.03994 10.6902 0.702804C17.4066 0.384667 24.7518 0.218475 31.8322 0.199482C66.4072 0.114012 100.949 0.109264 135.524 0.0665287C141.844 0.0570321 148.13 0.00480035 154.449 5.2025e-05C169.074 -0.00944462 179.099 1.2821 178.999 3.13395C178.9 4.98104 169.04 6.58655 154.449 6.57705C133.407 6.55806 113.718 7.12572 91.0234 6.97428C91.0565 6.84133 91.0234 5.93546 91.0234 5.79776Z" fill="#FFFD54" fill-opacity="0.7"/>
                        <path d="M144.023 9.79776C123.576 9.79776 103.162 9.83099 82.7147 9.77401C76.5276 9.75502 70.1088 9.58883 64.2194 9.29918C57.139 8.95255 53.1357 8.13109 53.0034 7.01999C52.8711 5.90413 56.6097 5.03994 63.6902 4.7028C70.4066 4.38467 77.7518 4.21847 84.8322 4.19948C119.407 4.11401 153.949 4.10926 188.524 4.06653C194.844 4.05703 201.13 4.0048 207.449 4.00005C222.074 3.99056 232.099 5.2821 231.999 7.13395C231.9 8.98104 222.04 10.5866 207.449 10.5771C186.407 10.5581 166.718 11.1257 144.023 10.9743C144.056 10.8413 144.023 9.93546 144.023 9.79776Z" fill="#FFFD54" fill-opacity="0.7"/>
                        </svg>
                </span> 
                 made easy.</p>
            <p className='py-10 text-lg tracking-wide leading-8 text-gray-500 w-[690px]'>
            REAPS is an application that has been designed to facilitate the easy submission, processing, tracking and granting of ethics approval to individuals applying for research ethics approval from Institutional or Ethical Review Boards.
            </p>
            <Link href='/try-demo' >
                <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
            </Link>
        </div>
        <div className='flex flex-col'>
            
            <Image className='' src={landing} alt="hero image" width={607} height={900} />
            
        </div>
    </div>
  )
}
