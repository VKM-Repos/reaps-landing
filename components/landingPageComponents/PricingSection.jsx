import React, {useState} from 'react'

export default function PricingSection() {
    const [priceRange, setPriceRange] = useState('')
    const handleChange = (event) => {
        // console.log(event.target.value)
        setPriceRange(event.target.value)
    }
    const specList = [
        {
            svg: <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15146 17.5971L0.351457 9.79711C-0.117152 9.3285 -0.117152 8.5687 0.351457 8.10004L2.04847 6.40298C2.51708 5.93432 3.27693 5.93432 3.74554 6.40298L9 11.6574L20.2545 0.402971C20.7231 -0.0656388 21.4829 -0.0656388 21.9515 0.402971L23.6485 2.10004C24.1172 2.56865 24.1172 3.32844 23.6485 3.7971L9.84853 17.5972C9.37987 18.0658 8.62007 18.0658 8.15146 17.5971Z" fill="#0077B6"/>
            </svg>,
            text: 'Limited request',
            standardText: 'Unlimited No. of request',
        },
        {
            svg: <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15146 17.5971L0.351457 9.79711C-0.117152 9.3285 -0.117152 8.5687 0.351457 8.10004L2.04847 6.40298C2.51708 5.93432 3.27693 5.93432 3.74554 6.40298L9 11.6574L20.2545 0.402971C20.7231 -0.0656388 21.4829 -0.0656388 21.9515 0.402971L23.6485 2.10004C24.1172 2.56865 24.1172 3.32844 23.6485 3.7971L9.84853 17.5972C9.37987 18.0658 8.62007 18.0658 8.15146 17.5971Z" fill="#0077B6"/>
            </svg>,
            text: 'Payment charge per use ',
            standardText: 'No charge per request',
        },
        {
            svg: <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15146 17.5971L0.351457 9.79711C-0.117152 9.3285 -0.117152 8.5687 0.351457 8.10004L2.04847 6.40298C2.51708 5.93432 3.27693 5.93432 3.74554 6.40298L9 11.6574L20.2545 0.402971C20.7231 -0.0656388 21.4829 -0.0656388 21.9515 0.402971L23.6485 2.10004C24.1172 2.56865 24.1172 3.32844 23.6485 3.7971L9.84853 17.5972C9.37987 18.0658 8.62007 18.0658 8.15146 17.5971Z" fill="#0077B6"/>
            </svg>,
            text: 'Custom client charge',
            standardText: 'Custom client charge',

        },
        {
            svg: <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.15146 17.5971L0.351457 9.79711C-0.117152 9.3285 -0.117152 8.5687 0.351457 8.10004L2.04847 6.40298C2.51708 5.93432 3.27693 5.93432 3.74554 6.40298L9 11.6574L20.2545 0.402971C20.7231 -0.0656388 21.4829 -0.0656388 21.9515 0.402971L23.6485 2.10004C24.1172 2.56865 24.1172 3.32844 23.6485 3.7971L9.84853 17.5972C9.37987 18.0658 8.62007 18.0658 8.15146 17.5971Z" fill="#0077B6"/>
            </svg>,
            text: 'Free support',
            standardText: 'Free support',

        }
    ]
  return (
    <div className='h-[785px] bg-[#f5fafc] w-screen flex gap-[47px] justify-center pt-[69px] pb-[69px] text-[#FFFFFF]'>
        <svg className='relative top-[70%]' width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1444 12.6143C16.5178 11.7453 20.7518 10.4689 24.549 8.05398C25.1313 7.68244 25.477 6.87945 25.8046 6.21429C27.1209 3.51767 30.0385 2.99033 32.1737 5.11167C33.8782 6.80754 35.5705 8.51539 37.2629 10.2232C37.6086 10.5708 37.9483 10.9364 38.2273 11.3379C39.2524 12.806 39.2524 14.5318 38.2576 15.5566C37.2083 16.6412 35.6797 16.6532 34.048 15.5146C32.7984 14.6397 31.5974 13.6869 30.366 12.7701C23.7179 17.4082 16.257 19.7093 8.39575 20.8659C6.85503 21.0936 5.17482 21.0337 3.6705 20.6681C0.570882 19.9071 -0.8 16.8929 0.473817 13.9865C0.862028 13.0996 1.42009 12.2547 2.03273 11.5056C5.9755 6.6817 10.816 2.99633 16.6088 0.569372C17.2639 0.293718 18.0282 -0.101785 18.647 0.0240571C19.6357 0.221809 20.776 0.599335 21.4251 1.28847C22.2621 2.18135 21.8679 3.40381 21.0126 4.23077C19.8358 5.36934 18.5438 6.38807 17.3003 7.46671C15.4927 9.03075 13.6912 10.5948 11.8836 12.1588C11.9685 12.2966 12.0595 12.4525 12.1444 12.6143Z" fill="#ADB3B6" fill-opacity="0.88"/>
        </svg>

        <div className='bg-[#0077B6] h-[674] w-[402px] rounded-md py-[35px] px-[68px]'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold mb-[16px]'>Basic</h2>
                <p>Pay per application</p>
                <p className='text-5xl font-bold my-[26px]'>$10</p>
                <center>
                <p className='mb-[26px] text-sm w-[267px] '>Payment per request will be based on estimated monthly request </p>
                </center>
                <div className='w-[323px] h-[257px] bg-[#FFFFFF] px-[32px] py-[px] rounded-md'>
                   
                   {
                    specList.map((element, index) => (
                        <p className='flex gap-[24px] my-[32px] w-96 text-[#0077B6]'>
                            <span>
                                {element.svg}
                            </span>
                            {element.text}
                        </p>
                    ))
                   }
                      
                </div>
                <button className='bg-[#FFFFFF] rounded-md px-[32px] py-[16px] my-[26px] text-[#0077B6]'>Get started</button>
                </div>
            </div>
        </div>

        <div className='border border-[#0077B6] bg-[#FFFFFF] h-[674] w-[402px] pt-[35px]  rounded-md text-black'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold mb-[16px]'>Basic</h2>
                <p>Annual Payment</p>
                <p className='text-5xl font-bold my-[26px]'>$25</p>
                <center>
                <p className='mb-[5px] text-sm w-[267px] '>Based on monthly Request</p>
                <input type="range" min='500' max='2000' onChange={handleChange} className='border h-3 w-[211px] bg-[#0077B6]' value='1200'/>
                <div className='flex justify-between w-[211px]'>
                    <span>500</span>
                    <span>2000</span>
                </div>
                </center>
                <div className='w-[323px] h-[257px] bg-[#f5fafc] px-[32px] py-[px] rounded-md'>
                   
                   {
                    specList.map((element, index) => (
                        <p className='flex gap-[24px] my-[32px] w-96 text-[#0077B6]'>
                            <span>
                                {element.svg}
                            </span>
                            {element.standardText}
                        </p>
                    ))
                   }
                      
                </div>
                <button className='text-[#FFFFFF] rounded-md px-[32px] py-[16px] my-[26px] bg-[#0077B6]'>Get started</button>
                </div>
            </div>
        </div>
        <svg className='relative right-[7%] top-[-5%]' width="85" height="87" viewBox="0 0 85 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.1885 16.8102C67.0035 18.0299 66.915 19.188 66.6496 20.2976C65.2983 25.8809 58.8918 28.677 54.3554 25.696C51.1943 23.622 50.4906 19.2892 52.791 16.0352C54.2388 13.9921 56.2536 12.8913 58.4173 12.0546C58.8194 11.9005 59.2256 11.7508 59.6599 11.5879C55.964 6.97327 42.8816 5.85925 36.9375 9.4303C37.7459 11.9886 38.7553 14.4412 39.2862 17.0171C40.1549 21.2223 38.2084 23.873 34.2712 24.1372C30.9654 24.3618 28.0577 23.217 25.7372 20.5926C22.733 17.1977 22.8175 12.5918 25.886 9.24536C26.3726 8.71256 26.9115 8.23701 27.5389 7.62055C25.516 6.49331 23.4529 5.95171 21.2933 6.20269C16.2662 6.78393 11.959 9.0208 8.61295 13.2435C5.35138 17.3606 6.52972 23.4811 11.0259 25.9161C11.6131 26.2332 12.2445 26.4577 12.8236 26.7924C14.0503 27.4969 14.1427 28.6198 13.0207 29.5136C11.6694 30.5924 10.1251 30.773 8.52046 30.4251C2.35927 29.0953 -1.58198 21.4733 0.613849 14.8199C1.23319 12.9441 2.25068 11.1344 3.41696 9.59322C7.61558 4.0495 13.069 0.883546 19.6122 0.0997636C24.0441 -0.428629 27.9733 1.18296 31.5244 3.96143C32.2684 4.54707 32.8596 4.59991 33.7122 4.28287C39.5154 2.14729 45.4394 0.786676 51.5845 1.93153C56.8971 2.92226 61.4858 5.43653 64.9324 10.1524C65.2219 10.5443 65.9297 10.7205 66.4525 10.7381C73.2854 10.9626 78.236 14.3488 81.0311 21.2223C82.6639 25.2381 82.4749 29.4123 81.4654 33.569C81.1678 34.802 80.8059 36.0261 80.3635 37.2062C80.094 37.9239 80.1906 38.3158 80.7254 38.8221C81.4895 39.5531 82.2094 40.3721 82.8167 41.2616C85.3383 44.9735 85.6842 48.9585 83.8101 53.1152C82.1813 56.7347 79.8608 59.7377 76.8284 62.0406C76.193 62.525 76.1126 62.886 76.3901 63.6786C78.1918 68.8569 77.4558 73.564 74.0455 77.7163C73.776 78.0421 73.4985 78.3679 73.1929 78.6498C67.6912 83.7003 61.341 86.4304 54.1824 86.8399C53.0725 86.9015 51.9223 86.6637 50.8324 86.3819C50.0522 86.1838 49.3122 85.7082 49.1192 84.8936C56.0043 83.1191 62.3545 80.345 68.0371 75.9021C69.1551 75.0303 70.2208 73.9955 71.0976 72.8462C72.7746 70.6446 72.8832 67.5887 71.552 65.3739C70.0801 65.7966 68.6202 66.2898 67.1282 66.6244C65.5839 66.9723 64.0597 66.7521 62.6601 65.9155C60.9388 64.8807 59.8731 63.3132 59.853 61.1071C59.8329 58.9231 60.7981 57.2807 62.4912 56.1755C64.2969 54.9954 66.2635 54.8721 68.206 55.5898C69.505 56.0698 70.6954 56.8932 71.9622 57.5008C72.3001 57.6638 72.839 57.7606 73.1124 57.5801C75.7346 55.8584 77.8459 53.5599 79.2455 50.5657C80.456 47.981 79.5954 45.1937 77.7896 44.0488C76.559 45.0968 75.441 45.9995 74.3712 46.9726C72.8591 48.3464 71.2625 49.5045 69.2516 49.7687C66.5209 50.1254 64.2406 48.8132 63.0864 46.2417C61.9563 43.7186 62.3705 40.7992 64.2849 38.7253C66.5772 36.2418 69.4648 35.4008 72.6057 35.4184C73.1526 35.4228 73.7318 35.4008 74.2345 35.5946C75.2801 35.9909 75.634 35.4316 75.9557 34.4761C76.748 32.1248 77.2668 29.7338 77.1502 27.2107C76.9008 21.5085 72.3966 16.7838 67.1885 16.8102ZM35.8356 18.4878C35.5742 15.7138 34.3034 13.5386 32.574 11.4074C31.7979 12.1471 31.0699 12.7548 30.4506 13.4681C30.2254 13.7279 30.0766 14.3267 30.1892 14.635C30.8689 16.4843 33.865 18.8885 35.8356 18.4878ZM57.818 19.571C58.9522 20.6719 60.9107 20.9625 61.9563 20.2712C62.7928 19.7208 63.1548 18.4306 62.825 17.0524C60.9992 17.5147 59.1975 17.9859 57.818 19.571Z" fill="#020266" fill-opacity="0.16"/>
        </svg>

    </div>
  )
}
