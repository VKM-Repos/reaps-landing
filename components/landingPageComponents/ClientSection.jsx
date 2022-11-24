import React from 'react'
import Image from 'next/image'
import client1 from '@assets/client1.svg'
import client2 from '@assets/client2.svg'
import client3 from '@assets/client3.svg'
import client4 from '@assets/client4.svg'
export default function ClientSection() {

    const ourClients = [client1, client2, client3, client4]
    return (
        <div>

            <svg className='pl-[7px] mt-[97px]' width="73" height="109" viewBox="0 0 73 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.9598 74.0237C62.3246 69.8071 62.6701 65.8396 63.0476 61.5464C62.2158 62.0191 61.6335 62.3513 61.0512 62.6899C58.1078 64.383 55.0492 65.7629 51.613 66.0696C46.2252 66.5552 43.4546 63.7633 44.0113 58.4286C44.6767 52.0973 47.3578 46.5966 51.2739 41.7283C56.9176 34.7071 60.4753 26.7211 62.7981 18.1218C63.31 16.2307 63.6043 14.2566 63.7323 12.3016C63.8667 10.1677 63.246 9.5736 61.1536 10.0016C57.2951 10.7875 53.2575 11.305 49.6998 12.8638C44.408 15.1829 39.3913 18.1729 34.4195 21.1501C31.4377 22.9325 29.2365 25.6222 27.9695 28.9444C26.9521 31.6149 27.3296 32.5477 29.6588 34.1832C30.3371 34.656 30.7274 35.5376 31.2521 36.2276C30.4842 36.6493 29.7548 37.3201 28.9357 37.4606C22.5114 38.5595 18.1986 34.6687 18.6913 28.1841C19.0624 23.2839 21.1612 19.029 24.7189 15.7579C34.6818 6.60281 46.3148 0.987068 59.9826 0.0159733C60.3282 -0.00958181 60.6801 0.00319303 61.032 0.00319303C68.6018 0.0287482 73.2281 4.48812 72.9913 12.078C72.8889 15.3299 72.1531 18.6521 71.1805 21.7762C68.4034 30.7013 64.3594 38.9939 58.5621 46.4433C56.3481 49.2863 54.87 52.7107 53.1167 55.9051C52.7712 56.5375 52.6688 57.3042 52.3425 58.3711C53.3535 58.0836 54.1277 58.0389 54.71 57.6747C57.3975 55.9753 60.0658 54.2376 62.6637 52.4104C63.6491 51.714 64.4426 50.7493 65.3192 49.8996C67.1045 48.1746 68.7937 47.7402 70.4958 48.5643C72.2299 49.4013 72.8442 51.1454 72.6266 53.6306C71.8523 62.2938 71.1037 70.9634 70.4638 79.6394C70.1887 83.3896 67.7507 85.4724 64.1354 84.4565C54.4605 81.7349 45.0735 82.9616 35.9808 86.6415C26.6642 90.4109 18.1346 95.605 10.4432 102.109C9.34904 103.035 8.35083 104.083 7.16706 105.214C7.85173 105.623 8.32526 105.904 8.79238 106.178C8.1397 108.676 5.22824 109.782 2.8223 108.395C0.685108 107.169 -0.332305 105.163 0.0964135 102.818C0.441948 100.927 1.09464 98.9271 2.18883 97.3747C3.80772 95.0747 5.66335 92.7811 7.89013 91.0945C18.7873 82.8402 30.561 76.33 44.2928 74.03C49.431 73.1675 54.5756 73.0078 59.7458 73.7553C60.3985 73.8639 61.0832 73.9278 61.9598 74.0237Z" fill="#020266" fillOpacity="0.16" />
            </svg>
            <div className='flex justify-center'>
                <svg className='absolute right-[58%] mt-8' width="28" height="28" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.425 29.7342C3.85531 25.2855 -1.19894 14.4863 0.958667 5.06737C1.24942 3.80889 1.82701 2.54809 2.54954 1.47119C3.42493 0.162959 4.98601 -0.1635 6.37673 0.393075C7.80991 0.96553 8.57101 2.08209 8.5521 3.59729C8.54237 4.50089 8.33356 5.42099 8.10531 6.3055C5.46301 16.4683 14.2747 27.8623 26.4915 24.7269C28.3094 24.2616 29.6004 24.766 30.1214 26.0745C30.6352 27.3603 30.0602 28.6161 28.4909 29.6372C23.8978 32.6147 18.0401 32.6488 12.425 29.7342Z" fill="#0077B6" fillOpacity="0.16" />
                </svg>
                <h2 className='flex justify-center py-10 text-4xl'>Our Clients</h2>
            </div>
            <div className='flex justify-center lg:gap-14 gap-5 overflow-x-auto lg:px-[175px]  px-10   '>
                {
                    ourClients.map((client, index) => (
                        <Image src={client} key={index} width='145px' height='145px' />
                    ))
                }
            </div>
            {/* <div className='bg-black w-full h-44 flex justify-center items-center'>
                <div className='bg-white w-[70%] h-32 flex gap-5 flex-row items-center justify-center overflow-x-auto flex-shrink-0 flex-grow-0'>
                    {
                        ourClients.map((client, index) => (
                            <Image src={client} key={index} width='150px' height='150px' />
                        ))
                    }
                </div>
            </div> */}


            <div className='flex justify-center pt-[55px] lg:pb-[200px] pb-[150px]'>
                <div className='flex flex-col gap-[39px] items-center'>
                    <div className='flex gap-[16px]'>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill="#0077B6" fillOpacity="0.16" />
                        </svg>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill="#0077B6" fillOpacity="0.16" />
                        </svg>
                        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4.5" r="4" fill="#0077B6" fillOpacity="0.16" />
                        </svg>
                    </div>


                </div>

            </div>

        </div>
    )
}
