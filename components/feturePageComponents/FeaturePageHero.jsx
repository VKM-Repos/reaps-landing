import React from 'react'
import users from 'assets/users.svg'
import userFemale from 'assets/user-female.svg'
import manager from 'assets/manager.svg'
import Image from 'next/image'
export default function FeaturePageHero() {
    return (
        <div className='lg:bg-[#0077B629] bg-[#020266] bg-opacity-[8%] px-7 pt-[128px] w-full lg:h-[637px] h-[500px]'>
            <div className='flex flex-col lg:items-center items-start gap-[20px] '>
                <p className='lg:text-6xl text-4xl  text-[#020231] lg:w-[917px] w-[380px] font-semibold align-middle'> Automate your ethics approval process with REAPS. </p>
                <p className='lg:text-lg text-md text-gray-500 w-[350px] lg:w-[900px]'>Introducing a system that not only makes work easier but also speedy and valid</p>
                <svg className='absolute hidden lg:block top-[42.5%] left-[51.5%] ' width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5516 29.5419C28.9703 27.1144 29.2663 24.9116 29.7395 22.7474C30.5817 18.8379 31.1401 14.8027 32.5031 11.0626C35.8514 1.90011 43.8673 -1.93485 52.9652 1.43481C57.1619 2.98521 61.0654 5.44448 64.8993 7.80769C67.5752 9.45527 68.2654 12.4077 67.152 14.8561C66.0104 17.3503 63.1399 18.7808 60.1328 17.9968C58.1432 17.4834 56.2872 16.4935 54.3856 15.6743C52.4155 14.8134 50.5236 13.7542 48.5025 13.0576C46.0323 12.1976 44.5562 12.7981 43.7364 15.2647C42.7677 18.1765 42.185 21.2165 41.5686 24.2297C40.7222 28.3856 40.2769 32.6349 39.1782 36.7158C37.4064 43.3056 32.5762 45.6217 26.3593 42.8331C22.8746 41.2692 19.6615 39.1017 16.3843 37.1095C12.4341 34.7006 8.51977 32.427 3.66364 32.1044C0.31099 31.8758 -0.949245 27.9673 1.17929 24.9526C3.28718 21.9662 6.4436 20.6376 9.87135 21.1012C12.936 21.5167 16.0052 22.5467 18.8147 23.8501C22.1145 25.3927 25.1385 27.5205 28.5516 29.5419Z" fill="#0077B6" fillOpacity="0.16" />
                </svg>

                <button className='bg-[#0077B6] text-[#FFFFFF] lg:py-[16px] py-[8px] lg:px-[32px] px-[15px] lg:text-lg text-sm rounded-md '>Get started</button>
            </div>
            <svg className='absolute left-[65%]' width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0614 3.61032C23.0435 1.54354 21.9301 0.470581 20.7268 0.338701C19.422 0.191355 18.1543 0.714644 16.9353 2.0221C15.0544 4.03649 13.2947 6.71823 11.7658 10.6081C10.7429 13.2112 9.70836 15.7818 8.74019 18.5654C6.98637 23.6034 4.88628 26.4182 2.50954 27.6228C2.01814 27.8702 1.53212 27.9318 1.04411 27.3734C0.782397 27.0728 0.527559 27.1286 0.353726 27.885C0.177341 28.6533 0.196083 29.5301 0.406268 30.1444C0.658994 30.8885 0.954735 31.5795 1.27216 32.0155C1.94316 32.94 2.6563 32.9583 3.37112 32.7748C5.81494 32.1481 7.9756 29.56 9.82732 24.7823C10.9249 21.9515 12.0269 19.1338 13.1335 16.3344C14.4846 12.9187 16.0247 10.4763 17.6887 8.74937C19.3139 7.06275 20.9701 6.69754 22.6473 8.67229C22.8296 8.88731 23.0073 9.14413 23.1809 9.42677C24.3837 11.3887 24.9703 14.3265 24.8502 18.4953C24.7518 21.9131 24.5251 25.1322 23.7262 27.6762C23.6847 27.8093 23.6823 28.0612 23.6622 28.2554C23.7581 28.2506 23.8684 28.3394 23.9491 28.231C25.0101 26.8096 25.6343 24.2289 25.9693 20.9276C26.0666 19.9718 26.1374 18.9789 26.1869 17.9851C26.4863 11.8431 25.7889 7.15133 24.0614 3.61032Z" fill="white" fillOpacity="0.62" />
            </svg>

            <div className='flex flex-col items-center lg:mt-[115px] mt-[50px]'>
                <div className='lg:h-[32px] lg:w-[322px] py-[2px] lg:px-[36px] px-[15px] rounded-md bg-[#FFFFFF] lg:text-lg text-sm flex justify-center text-[#0077B6]'>
                    <p>Multi-user Dashboard</p>
                </div>
                <div className='lg:py-[40px] lg:w-[900px] w-[300px] lg:rounded-4xl rounded-[32px] flex lg:gap-[100px] gap-[20px] justify-center mt-[-5px] bg-[#FFFFFF] shadow-xl text-[#0077B6]'>
                    <div className='flex flex-col items-center justify-center lg:w-[100px] w-[50px] px-2 '>
                        <Image src={users} />
                        <p className='lg:text-lg text-xs '>Users</p>
                    </div>
                    <svg width="9" height="87" viewBox="0 0 9 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_530_161)">
                            <line x1="4.5" y1="4" x2="4.5" y2="83" stroke="black" strokeOpacity="0.25" />
                        </g>
                        <defs>
                            <filter id="filter0_f_530_161" x="0" y="0" width="9" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_530_161" />
                            </filter>
                        </defs>
                    </svg>
                    <div className='flex flex-col items-center justify-center lg:w-[100px] w-[50px] px-2'>
                        <Image src={userFemale} />
                        <p className='lg:text-lg text-xs'>Reviewers</p>
                    </div>

                    <svg width="9" height="92" viewBox="0 0 9 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_530_162)">
                            <line x1="4.5" y1="4" x2="4.5" y2="88" stroke="black" strokeOpacity="0.25" />
                        </g>
                        <defs>
                            <filter id="filter0_f_530_162" x="0" y="0" width="9" height="92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_530_162" />
                            </filter>
                        </defs>
                    </svg>
                    <div className='flex flex-col items-center justify-center lg:w-[100px] w-[50px] px-2'>
                        <Image src={manager} />
                        <p className='lg:text-lg text-xs'>Administrators</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
