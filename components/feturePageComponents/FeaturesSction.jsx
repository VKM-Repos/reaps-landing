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
    <div className='mt-[300px] px-[69px] mb-[200px]'>
        <p className='text-lg font-semibold text-[#0077B6]'>Features</p>
        <p className='text-sm text-[#020231]'>Everything you need to Simplify each process</p>

        <div>
        <div className='flex justify-center gap-[150px] mt-[71px] text-[#020231]'>
            
            <div className='flex items-center gap-[16px]'>
                <Image src={addUserGroup} />
                <div className='w-[250px] text-sm'>
                    <p className='text-lg font-semibold'>Roles management</p>
                    <p className=''>Assign roles to members that customize access  to the system.</p>
                </div>
            </div>

            <div className='flex items-center gap-[16px]'>
                <Image src={analytics} />
                <div className='w-[250px] text-sm'>
                    <p className='text-lg font-semibold'>System Report</p>
                    <p>Track and view all pending, processed, declined and approved requests  from your dashboard.</p>
                </div>
            </div>

            <div className='flex items-center gap-[16px]'>
                <Image src={productManagement} />
                <div className='text-sm'>
                    <p className='text-lg font-semibold'>Request Management</p>
                    <p>Assign Request to other members and full rights to approve request.</p>
                </div>
            </div>

        </div>

        <div className='flex  gap-[170px] mt-[71px] text-[#020231]'>
            <div className='flex items-center gap-[16px] mr-[40px]'>
                <Image src={albums} />
                <div className='w-[240px]'>
                    <p className='text-lg font-semibold'>Generate Report</p>
                    <p className='text-sm'>Full access to all request phase reports and database on the application system.</p>
                </div>
            </div>

            <div className='flex items-center gap-[16px] ml-[-100px]'>
                <Image src={customerInsight} />
                <div className='w-[240px] '>
                    <p className='text-lg font-semibold'>Custom View</p>
                    <p className='text-sm'>Full Customization right of your institution’s  web view on the REAPS website as an administrator.</p>
                </div>
            </div>
            
            <div className='flex items-center gap-[16px] ml-[-50px]'>
                <Image src={workspace} />
                <div className='w-[240px]'>
                    <p className='text-lg font-semibold'>Personalized dashboard</p>
                    <p className='text-sm'>Get a visual summary of your application/request process and customized your profile.</p>
                </div>
            </div>
        </div>
        </div>
        <div className='flex justify-center w-full'>
            <div className='flex gap-[31px] justify-center items-center w-[900px] shadow-xl rounded-xl h-[250px] mt-[133px] '>
                <p className='text-xl w-[200px]'>Request and Track Review and Approve</p>
                <Link href='/try-demo' >
                    <a className='bg-primary text-white px-8 py-4 rounded-md'>Try Demo</a>
                </Link>
            </div>
        </div>
        <div className='flex justify-center -mt-20'>
        <svg width="174" height="90" viewBox="0 0 174 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.9908 53.9037C83.8799 65.366 74.3411 73.4931 63.069 80.3531C58.22 83.2855 53.0478 85.484 47.7489 86.8486C35.3796 90.0874 23.4885 90.0762 12.3514 87.2606C5.69595 85.5654 0.976456 82.0274 0.278883 75.3914C0.199487 74.4555 0.104323 73.4884 0.269045 72.5456C0.66899 70.1164 2.95146 68.3708 5.81011 68.4414C7.11737 68.4801 8.32261 69.0003 9.66155 69.2962C10.7498 71.438 7.94033 74.1932 10.1151 76.1343C12.1324 77.9602 14.4643 79.2357 17.3705 79.7897C28.0188 81.8383 39.0674 82.0433 50.4753 77.8871C61.8832 73.7309 70.8871 66.5004 78.1101 57.5191C78.4484 57.1129 78.5189 56.5694 78.6603 56.068C78.6995 55.8528 78.6443 55.6465 78.5967 55.163C76.2971 54.9256 73.8872 54.6661 71.5008 54.3555C65.602 53.5646 60.0491 52.0903 55.4009 49.18C46.6875 43.727 45.2328 35.4059 51.2582 25.6272C54.0271 21.1352 57.6074 17.1681 62.0544 13.737C67.9417 9.14449 74.571 7.18197 81.4382 7.63701C88.8646 8.12036 93.5762 11.5452 95.1083 17.8744C96.4351 23.4096 96.3131 29.2123 95.2226 35.1557C94.7205 37.8712 94.2419 40.5355 93.6378 43.7324C102.284 43.0102 109.912 39.0172 117.588 35.8981C126.878 32.1542 138.881 23.1264 145.845 15.2922C143.285 14.4451 140.372 15.5346 137.907 15.2641C135.536 14.9845 133.134 14.643 130.991 13.9351C129.377 13.3888 129.305 11.7851 130.036 10.2029C130.728 8.64067 131.964 7.46615 133.924 7.32904C136.169 7.16504 138.366 7.29835 140.641 7.00124C148.846 5.99551 157.02 4.73247 165.034 1.40232C165.853 1.06441 166.671 0.726524 167.498 0.501734C169.632 -0.0747283 171.483 0.156449 172.665 1.50842C173.863 2.89143 173.47 4.65299 172.204 6.35103C169.749 9.7071 167.042 12.9569 164.714 16.3661C161.142 21.6175 157.988 27.0082 156.874 32.8075C156.748 33.5351 156.489 34.2917 156.159 35.0063C155.137 37.4782 153.334 38.9017 151.176 38.9437C148.979 39.0056 147.278 37.8005 147.04 35.5781C146.858 33.9524 147.156 32.1998 147.375 30.4872C147.524 29.1229 147.806 27.7297 148.23 25.2494C138.801 32.4227 130.56 39.3043 120.452 43.5813C110.556 47.7893 100.636 51.2676 89.9908 53.9037ZM83.4966 46.1906C85.8935 39.1148 87.3775 32.7762 87.003 26.4838C86.8677 24.3656 86.6063 22.1942 85.912 20.2429C84.3655 15.8347 81.0728 14.4226 75.3482 15.1443C71.482 15.6248 67.9787 17.2096 65.2716 19.8738C62.8714 22.2649 60.5264 24.8623 58.8273 27.5612C54.6346 34.2216 55.6696 39.085 61.8852 42.4486C67.8645 45.737 74.8662 46.9439 83.4966 46.1906Z" fill="#020266" fill-opacity="0.24"/>
                </svg>
        </div>
    </div>
    
  )
}
