import React from 'react'

export default function SupportHero() {
  return (
    <div className='bg-[#0077B629] h-[500px] w-full py-24 flex flex-col gap-10 items-center justify-center'>
      <div className='mt-[50px]'>
        <p className='text-4xl lg:text-7xl ]'>Here to help</p>
      </div>
      <svg className='absolute lg:left-[13%] left-[70%] lg:top-[34%] top-[26%] ' width="110" height="110" viewBox="0 0 106 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.7825 6.183C53.6325 7.59872 51.7725 7.59872 50.6225 6.183C49.4725 4.76728 49.4725 2.47751 50.6225 1.06179C51.7725 -0.35393 53.6325 -0.35393 54.7825 1.06179C55.9225 2.4652 55.9225 4.76728 54.7825 6.183ZM67.2225 16.3638C66.0725 14.9481 64.2125 14.9481 63.0625 16.3638C61.9125 17.7796 61.9125 20.0693 63.0625 21.4851C64.2125 22.9008 66.0725 22.9008 67.2225 21.4851C68.3625 20.0816 68.3625 17.7796 67.2225 16.3638ZM79.6525 31.6782C78.5025 30.2625 76.6425 30.2625 75.4925 31.6782C74.3425 33.0939 74.3425 35.3837 75.4925 36.7994C76.6425 38.2151 78.5025 38.2151 79.6525 36.7994C80.8025 35.3837 80.8025 33.0939 79.6525 31.6782ZM92.0925 46.9926C90.9425 45.5768 89.0825 45.5768 87.9325 46.9926C86.7825 48.4083 86.7825 50.6981 87.9325 52.1138C89.0825 53.5295 90.9425 53.5295 92.0925 52.1138C93.2425 50.6981 93.2425 48.4083 92.0925 46.9926ZM104.533 62.3069C103.383 60.8912 101.523 60.8912 100.373 62.3069C99.2225 63.7227 99.2225 66.0125 100.373 67.4282C101.523 68.8439 103.383 68.8439 104.533 67.4282C105.683 66.0125 105.683 63.7227 104.533 62.3069ZM42.3425 16.3638C41.1925 14.9481 39.3325 14.9481 38.1825 16.3638C37.0325 17.7796 37.0325 20.0693 38.1825 21.4851C39.3325 22.9008 41.1925 22.9008 42.3425 21.4851C43.4925 20.0816 43.4925 17.7796 42.3425 16.3638ZM54.7825 31.6782C53.6325 30.2625 51.7725 30.2625 50.6225 31.6782C49.4725 33.0939 49.4725 35.3837 50.6225 36.7994C51.7725 38.2151 53.6325 38.2151 54.7825 36.7994C55.9225 35.3837 55.9225 33.0939 54.7825 31.6782ZM67.2225 46.9926C66.0725 45.5768 64.2125 45.5768 63.0625 46.9926C61.9125 48.4083 61.9125 50.6981 63.0625 52.1138C64.2125 53.5295 66.0725 53.5295 67.2225 52.1138C68.3625 50.6981 68.3625 48.4083 67.2225 46.9926ZM79.6525 62.3069C78.5025 60.8912 76.6425 60.8912 75.4925 62.3069C74.3425 63.7227 74.3425 66.0125 75.4925 67.4282C76.6425 68.8439 78.5025 68.8439 79.6525 67.4282C80.8025 66.0125 80.8025 63.7227 79.6525 62.3069ZM92.0925 77.6213C90.9425 76.2056 89.0825 76.2056 87.9325 77.6213C86.7825 79.037 86.7825 81.3269 87.9325 82.7426C89.0825 84.1583 90.9425 84.1583 92.0925 82.7426C93.2425 81.3269 93.2425 79.037 92.0925 77.6213ZM29.9025 31.6782C28.7525 30.2625 26.8925 30.2625 25.7425 31.6782C24.5925 33.0939 24.5925 35.3837 25.7425 36.7994C26.8925 38.2151 28.7525 38.2151 29.9025 36.7994C31.0525 35.3837 31.0525 33.0939 29.9025 31.6782ZM42.3425 46.9926C41.1925 45.5768 39.3325 45.5768 38.1825 46.9926C37.0325 48.4083 37.0325 50.6981 38.1825 52.1138C39.3325 53.5295 41.1925 53.5295 42.3425 52.1138C43.4925 50.6981 43.4925 48.4083 42.3425 46.9926ZM54.7825 62.3069C53.6325 60.8912 51.7725 60.8912 50.6225 62.3069C49.4725 63.7227 49.4725 66.0125 50.6225 67.4282C51.7725 68.8439 53.6325 68.8439 54.7825 67.4282C55.9225 66.0125 55.9225 63.7227 54.7825 62.3069ZM67.2225 77.6213C66.0725 76.2056 64.2125 76.2056 63.0625 77.6213C61.9125 79.037 61.9125 81.3269 63.0625 82.7426C64.2125 84.1583 66.0725 84.1583 67.2225 82.7426C68.3625 81.3269 68.3625 79.037 67.2225 77.6213ZM79.6525 92.9357C78.5025 91.52 76.6425 91.52 75.4925 92.9357C74.3425 94.3514 74.3425 96.6412 75.4925 98.0569C76.6425 99.4727 78.5025 99.4727 79.6525 98.0569C80.8025 96.6412 80.8025 94.3514 79.6525 92.9357ZM17.4625 46.9926C16.3125 45.5768 14.4525 45.5768 13.3025 46.9926C12.1525 48.4083 12.1525 50.6981 13.3025 52.1138C14.4525 53.5295 16.3125 53.5295 17.4625 52.1138C18.6125 50.6981 18.6125 48.4083 17.4625 46.9926ZM29.9025 62.3069C28.7525 60.8912 26.8925 60.8912 25.7425 62.3069C24.5925 63.7227 24.5925 66.0125 25.7425 67.4282C26.8925 68.8439 28.7525 68.8439 29.9025 67.4282C31.0525 66.0125 31.0525 63.7227 29.9025 62.3069ZM42.3425 77.6213C41.1925 76.2056 39.3325 76.2056 38.1825 77.6213C37.0325 79.037 37.0325 81.3269 38.1825 82.7426C39.3325 84.1583 41.1925 84.1583 42.3425 82.7426C43.4925 81.3269 43.4925 79.037 42.3425 77.6213ZM54.7825 92.9357C53.6325 91.52 51.7725 91.52 50.6225 92.9357C49.4725 94.3514 49.4725 96.6412 50.6225 98.0569C51.7725 99.4727 53.6325 99.4727 54.7825 98.0569C55.9225 96.6412 55.9225 94.3514 54.7825 92.9357ZM67.2225 108.25C66.0725 106.834 64.2125 106.834 63.0625 108.25C61.9125 109.666 61.9125 111.956 63.0625 113.371C64.2125 114.787 66.0725 114.787 67.2225 113.371C68.3625 111.956 68.3625 109.666 67.2225 108.25ZM5.0225 62.3069C3.8725 60.8912 2.0125 60.8912 0.8625 62.3069C-0.2875 63.7227 -0.2875 66.0125 0.8625 67.4282C2.0125 68.8439 3.8725 68.8439 5.0225 67.4282C6.1725 66.0125 6.1725 63.7227 5.0225 62.3069ZM17.4625 77.6213C16.3125 76.2056 14.4525 76.2056 13.3025 77.6213C12.1525 79.037 12.1525 81.3269 13.3025 82.7426C14.4525 84.1583 16.3125 84.1583 17.4625 82.7426C18.6125 81.3269 18.6125 79.037 17.4625 77.6213ZM29.9025 92.9357C28.7525 91.52 26.8925 91.52 25.7425 92.9357C24.5925 94.3514 24.5925 96.6412 25.7425 98.0569C26.8925 99.4727 28.7525 99.4727 29.9025 98.0569C31.0525 96.6412 31.0525 94.3514 29.9025 92.9357ZM42.3425 108.25C41.1925 106.834 39.3325 106.834 38.1825 108.25C37.0325 109.666 37.0325 111.956 38.1825 113.371C39.3325 114.787 41.1925 114.787 42.3425 113.371C43.4925 111.956 43.4925 109.666 42.3425 108.25ZM54.7825 123.564C53.6325 122.149 51.7725 122.149 50.6225 123.564C49.4725 124.98 49.4725 127.27 50.6225 128.686C51.7725 130.101 53.6325 130.101 54.7825 128.686C55.9325 127.27 55.9225 124.98 54.7825 123.564Z" fill="#020266" fillOpacity="0.16" />
      </svg>
      <div className='flex lg:flex-row flex-col gap-[16px] mb-[88px] z-10' >
        <input type="text" className='bg-white lg:py-[17px] py-[13px] lg:px-[23px] px-5 lg:w-[683px] w-[300px] focus:outline-none rounded-md' placeholder='search a keyword to help you For example: How to..' />
        <div className='flex justify-center'>
          <button className='bg-primary  text-white lg:px-8 px-2 lg:py-4 py-3 lg:w-[120px] w-[105px] lg:text-lg text-md rounded-md'>Search</button>
        </div>
      </div>
    </div>
  )
}
