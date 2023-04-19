import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import addUserGroup from 'assets/add-user-group.svg'
import analytics from 'assets/analytics.svg'
import productManagement from 'assets/product-management.svg'
import albums from 'assets/albums.svg'
import customerInsight from 'assets/customer-insight.svg'
import workspace from 'assets/workspace.svg'
export default function FeaturesSction() {
    return (
        <div className='lg:mt-[300px] mt-[100px] lg:px-[69px] px-[30px] lg:mb-[200px]'>
            <p className='lg:text-xl text-lg font-semibold text-[#0077B6]'>Features</p>
            <p className='lg:text-sm text-xs text-[#020231]'>Everything you need to Simplify each process</p>

            <div className='flex flex-col lg:gap-[150px] gap-[100px]'>
                <div className='grid lg:grid-cols-3 lg:gap-[150px] gap-[50px] mt-[40px] text-[#020231]'>
                    <div className='flex items-center gap-[16px]'>
                        <Image src={addUserGroup} />
                        <div className='w-[250px] text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>Roles management</p>
                            <p className='lg:text-sm text-xs'>Assign roles to members that customize access  to the system.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-[16px]'>
                        <Image src={analytics} />
                        <div className='w-[250px] text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>System Report</p>
                            <p className='lg:text-sm text-xs'>Track and view all pending, processed, declined and approved requests  from your dashboard.</p>
                        </div>
                    </div>

                    <div className='flex items-center lg:gap-[16px] gap-[32px]'>
                        <Image src={productManagement} />
                        <div className='text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>Request Management</p>
                            <p className='lg:text-sm text-xs'>Assign Request to other members and full rights to approve request.</p>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 lg:gap-[150px] gap-[50px] -mt-[30px] text-[#020231]'>
                    <div className='flex items-center gap-[16px]'>
                        <Image src={albums} />
                        <div className='w-[250px] text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>Generate Report</p>
                            <p className='lg:text-sm text-xs'>Full access to all request phase reports and database on the application system.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-[16px]'>
                        <Image src={customerInsight} />
                        <div className='w-[250px] text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>Custom View</p>
                            <p className='lg:text-sm text-xs'>Full Customization right of your institution’s  web view on the REAPS website as an administrator.</p>
                        </div>
                    </div>

                    <div className='flex items-center lg:gap-[16px] gap-[32px] '>
                        <Image src={workspace} />
                        <div className='text-sm'>
                            <p className='lg:text-lg text-md font-semibold'>Personalized dashboard</p>
                            <p className='lg:text-sm text-xs'>Get a visual summary of your application/request process and customized your profile.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <div className='flex lg:flex-row flex-col gap-[31px] justify-center items-center w-[900px] shadow-xl rounded-xl h-[250px] mt-[100px] '>
                    <p className='lg:text-xl text-lg lg:font-semibold font-medium w-[200px]'>Request and Track Review and Approve</p>
                    <Link href='/try-demo' >
                        <a className='bg-primary text-white lg:px-8 px-32 z-10 py-4 rounded-md lg:text-lg text-xs'>Try Demo</a>
                    </Link>
                </div>
            </div>
            <div className='lg:flex hidden justify-center  lg:-mt-20 -mt-14 mb-36'>
                <svg width="174" height="90" viewBox="0 0 174 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89.9908 53.9037C83.8799 65.366 74.3411 73.4931 63.069 80.3531C58.22 83.2855 53.0478 85.484 47.7489 86.8486C35.3796 90.0874 23.4885 90.0762 12.3514 87.2606C5.69595 85.5654 0.976456 82.0274 0.278883 75.3914C0.199487 74.4555 0.104323 73.4884 0.269045 72.5456C0.66899 70.1164 2.95146 68.3708 5.81011 68.4414C7.11737 68.4801 8.32261 69.0003 9.66155 69.2962C10.7498 71.438 7.94033 74.1932 10.1151 76.1343C12.1324 77.9602 14.4643 79.2357 17.3705 79.7897C28.0188 81.8383 39.0674 82.0433 50.4753 77.8871C61.8832 73.7309 70.8871 66.5004 78.1101 57.5191C78.4484 57.1129 78.5189 56.5694 78.6603 56.068C78.6995 55.8528 78.6443 55.6465 78.5967 55.163C76.2971 54.9256 73.8872 54.6661 71.5008 54.3555C65.602 53.5646 60.0491 52.0903 55.4009 49.18C46.6875 43.727 45.2328 35.4059 51.2582 25.6272C54.0271 21.1352 57.6074 17.1681 62.0544 13.737C67.9417 9.14449 74.571 7.18197 81.4382 7.63701C88.8646 8.12036 93.5762 11.5452 95.1083 17.8744C96.4351 23.4096 96.3131 29.2123 95.2226 35.1557C94.7205 37.8712 94.2419 40.5355 93.6378 43.7324C102.284 43.0102 109.912 39.0172 117.588 35.8981C126.878 32.1542 138.881 23.1264 145.845 15.2922C143.285 14.4451 140.372 15.5346 137.907 15.2641C135.536 14.9845 133.134 14.643 130.991 13.9351C129.377 13.3888 129.305 11.7851 130.036 10.2029C130.728 8.64067 131.964 7.46615 133.924 7.32904C136.169 7.16504 138.366 7.29835 140.641 7.00124C148.846 5.99551 157.02 4.73247 165.034 1.40232C165.853 1.06441 166.671 0.726524 167.498 0.501734C169.632 -0.0747283 171.483 0.156449 172.665 1.50842C173.863 2.89143 173.47 4.65299 172.204 6.35103C169.749 9.7071 167.042 12.9569 164.714 16.3661C161.142 21.6175 157.988 27.0082 156.874 32.8075C156.748 33.5351 156.489 34.2917 156.159 35.0063C155.137 37.4782 153.334 38.9017 151.176 38.9437C148.979 39.0056 147.278 37.8005 147.04 35.5781C146.858 33.9524 147.156 32.1998 147.375 30.4872C147.524 29.1229 147.806 27.7297 148.23 25.2494C138.801 32.4227 130.56 39.3043 120.452 43.5813C110.556 47.7893 100.636 51.2676 89.9908 53.9037ZM83.4966 46.1906C85.8935 39.1148 87.3775 32.7762 87.003 26.4838C86.8677 24.3656 86.6063 22.1942 85.912 20.2429C84.3655 15.8347 81.0728 14.4226 75.3482 15.1443C71.482 15.6248 67.9787 17.2096 65.2716 19.8738C62.8714 22.2649 60.5264 24.8623 58.8273 27.5612C54.6346 34.2216 55.6696 39.085 61.8852 42.4486C67.8645 45.737 74.8662 46.9439 83.4966 46.1906Z" fill="#020266" fillOpacity="0.24" />
                </svg>
            </div>
            <div className='flex lg:hidden justify-center  lg:-mt-20 -mt-14 mb-20 z-40'>
                <svg width="85" height="90" viewBox="0 0 71 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6166 29.1541C32.7717 35.2831 35.9849 39.6728 40.1782 43.4055C41.9846 45.0014 44.0458 46.2109 46.2856 46.9793C51.5063 48.8015 56.9764 48.8964 62.5046 47.4982C65.8101 46.6559 68.4914 44.8202 69.7704 41.3079C69.942 40.8123 70.1254 40.3004 70.1858 39.7991C70.3527 38.5078 69.5551 37.563 68.2303 37.5761C67.6235 37.5856 66.9941 37.8511 66.3356 37.9967C65.5259 39.1229 66.4201 40.6076 65.1396 41.6182C63.9483 42.5691 62.6917 43.2256 61.2752 43.4947C56.0825 44.4904 50.9719 44.5053 46.3258 42.205C41.6797 39.9046 38.583 35.9947 36.5582 31.1718C36.4613 30.9535 36.5073 30.6648 36.5147 30.3977C36.5277 30.2833 36.5829 30.1744 36.6746 29.9185C37.7665 29.8121 38.9122 29.695 40.0545 29.5506C42.8814 29.1813 45.6479 28.4468 48.2058 26.9433C53.0003 24.1262 54.8708 19.7268 53.5118 14.4913C52.8871 12.0862 51.8134 9.95253 50.2638 8.09569C48.2195 5.61086 45.4542 4.51412 42.2304 4.69708C38.7454 4.89032 36.0841 6.66613 34.4656 10.0087C33.0562 12.9321 32.2744 16.0096 31.9177 19.1699C31.7565 20.6139 31.5919 22.0305 31.4081 23.7306C27.5362 23.2743 24.6048 21.0926 21.5252 19.3737C17.7936 17.3099 13.5773 12.4217 11.506 8.20911C12.8055 7.78168 13.9878 8.38407 15.1605 8.26155C16.291 8.13347 17.445 7.97276 18.5325 7.61567C19.354 7.33969 19.6186 6.49006 19.5108 5.645C19.4182 4.81089 19.0195 4.17769 18.1376 4.08836C17.1292 3.98236 16.0996 4.0344 15.0959 3.85756C11.4679 3.25471 7.89155 2.51571 4.68678 0.682112C4.35905 0.496012 4.03132 0.309921 3.6836 0.183728C2.78559 -0.140014 1.90105 -0.0331517 1.16218 0.673599C0.41157 1.39667 0.337759 2.33395 0.675094 3.24496C1.31934 5.04512 2.09482 6.79108 2.67343 8.61832C3.55765 11.4328 4.22975 14.3176 3.90479 17.4017C3.85743 17.7886 3.86744 18.1919 3.91614 18.5735C4.02922 19.8928 4.65255 20.6628 5.63878 20.7033C6.64021 20.7548 7.59683 20.1303 8.02708 18.9541C8.34564 18.0937 8.46167 17.162 8.6081 16.2522C8.73672 15.5276 8.80795 14.7865 8.97131 13.468C12.2718 17.3511 15.0677 21.0695 19.0988 23.4229C23.042 25.7379 27.1018 27.6662 31.6166 29.1541ZM35.7168 25.1199C35.6362 21.3481 35.8691 17.975 36.9499 14.642C37.318 13.5201 37.7517 12.3712 38.3528 11.3425C39.7005 9.0185 41.4186 8.29775 43.947 8.72899C45.6557 9.01653 47.0379 9.88648 47.8981 11.322C48.6567 12.6101 49.36 14.0071 49.7517 15.4523C50.7181 19.0192 49.5399 21.5888 46.1958 23.3194C42.9712 25.0121 39.577 25.5925 35.7168 25.1199Z" fill="#020266" fill-opacity="0.24" />
                </svg>

            </div>
        </div>

    )
}
