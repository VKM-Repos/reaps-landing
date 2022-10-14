import React from 'react'
import users from 'assets/users.svg'
import userFemale from 'assets/user-female.svg'
import manager from 'assets/manager.svg'
import Image from 'next/image'
export default function FeaturePageHero() {
  return (
    <div className='bg-[#0077B629] flex justify-center pt-[128px] w-full h-[637px]'>
       <div className='flex flex-col gap-[40px] items-center'>
       <center><p className='text-6xl w-[917px] font-semibold'> Automate your ethics approval process with REAPS. </p></center>
        <p className='text-lg'>Introducing a system that not only makes work easier but attract researchers to your school</p>
        <svg className='absolute top-[42.5%] left-[51.5%] ' width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5516 29.5419C28.9703 27.1144 29.2663 24.9116 29.7395 22.7474C30.5817 18.8379 31.1401 14.8027 32.5031 11.0626C35.8514 1.90011 43.8673 -1.93485 52.9652 1.43481C57.1619 2.98521 61.0654 5.44448 64.8993 7.80769C67.5752 9.45527 68.2654 12.4077 67.152 14.8561C66.0104 17.3503 63.1399 18.7808 60.1328 17.9968C58.1432 17.4834 56.2872 16.4935 54.3856 15.6743C52.4155 14.8134 50.5236 13.7542 48.5025 13.0576C46.0323 12.1976 44.5562 12.7981 43.7364 15.2647C42.7677 18.1765 42.185 21.2165 41.5686 24.2297C40.7222 28.3856 40.2769 32.6349 39.1782 36.7158C37.4064 43.3056 32.5762 45.6217 26.3593 42.8331C22.8746 41.2692 19.6615 39.1017 16.3843 37.1095C12.4341 34.7006 8.51977 32.427 3.66364 32.1044C0.31099 31.8758 -0.949245 27.9673 1.17929 24.9526C3.28718 21.9662 6.4436 20.6376 9.87135 21.1012C12.936 21.5167 16.0052 22.5467 18.8147 23.8501C22.1145 25.3927 25.1385 27.5205 28.5516 29.5419Z" fill="#0077B6" fill-opacity="0.16"/>
            </svg>

        <button className='bg-[#0077B6] text-[#FFFFFF] py-[16px] px-[32px] rounded-md mb-[138px]'>Get started</button>

        <div className='h-[32px] w-[322px] py-[2px] px-[36px] rounded-md bg-[#FFFFFF] flex justify-center text-[#0077B6]'>
            <p>Multi-user Dashboard</p>
       </div>
       <div className='py-[40px] w-[900px] rounded-lg flex gap-[100px] justify-center mt-[-42px] bg-[#FFFFFF] shadow-xl text-[#0077B6]'>   
            <div className='flex flex-col items-center'>
                <Image src={users} />
                <p>Users</p>
            </div>
            <svg width="9" height="87" viewBox="0 0 9 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_530_161)">
                <line x1="4.5" y1="4" x2="4.5" y2="83" stroke="black" stroke-opacity="0.25"/>
                </g>
                <defs>
                <filter id="filter0_f_530_161" x="0" y="0" width="9" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_530_161"/>
                </filter>
                </defs>
            </svg>
            <div className='flex flex-col items-center'>
                <Image src={userFemale} />
                <p>Reviewers</p>
            </div>

            <svg width="9" height="92" viewBox="0 0 9 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_530_162)">
                <line x1="4.5" y1="4" x2="4.5" y2="88" stroke="black" stroke-opacity="0.25"/>
                </g>
                <defs>
                <filter id="filter0_f_530_162" x="0" y="0" width="9" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_530_162"/>
                </filter>
                </defs>
            </svg>
            <div className='flex flex-col items-center'>
                <Image src={manager} />
                <p>Administrators</p>
            </div>
       </div>
       </div>
    </div>
  )
}
