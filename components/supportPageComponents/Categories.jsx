import React, { useState } from 'react'
import Image from 'next/image'
import categoriesBg from '@assets/categoriesBg.svg'
export default function Categories() {
    const [textCondition, setTextCondition] = useState(false)
    const categoriesSVG = <svg className='absolute right-[50%]' width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.552 29.5419C28.9708 27.1144 29.2668 24.9116 29.74 22.7474C30.5822 18.8379 31.1406 14.8027 32.5036 11.0626C35.8518 1.90011 43.8677 -1.93485 52.9657 1.43481C57.1624 2.98521 61.0659 5.44448 64.8998 7.80769C67.5757 9.45527 68.2659 12.4077 67.1525 14.8561C66.0109 17.3503 63.1404 18.7808 60.1332 17.9968C58.1437 17.4834 56.2877 16.4935 54.3861 15.6743C52.416 14.8134 50.5241 13.7542 48.5029 13.0576C46.0328 12.1976 44.5567 12.7981 43.7368 15.2647C42.7682 18.1765 42.1855 21.2165 41.5691 24.2297C40.7226 28.3856 40.2774 32.6349 39.1787 36.7158C37.4069 43.3056 32.5767 45.6217 26.3597 42.8331C22.8751 41.2692 19.662 39.1017 16.3848 37.1095C12.4346 34.7006 8.52026 32.427 3.66413 32.1044C0.311478 31.8758 -0.948757 27.9673 1.17978 24.9526C3.28767 21.9662 6.44409 20.6376 9.87184 21.1012C12.9365 21.5167 16.0057 22.5467 18.8152 23.8501C22.115 25.3927 25.139 27.5205 28.552 29.5419Z" fill="#0077B6" fillOpacity="0.16" />
    </svg>
    const [categoryList, setCategoryList] = useState([
        {
            title: 'How many days does it take to get verified into the system?',
            svg: categoriesSVG,
            text: "It’s an instant process  once you create an account, a link is sent to your email for you to verify, once done you gain access immedaitely to your dashboard. To start sending request your admin will have to make you active it should take less than 24 hrs to get active.",
            showText: false
        }, {
            title: 'Can i create a user account from  my personal account',
            svg: categoriesSVG,
            text: 'You can do so if you are given administrative privilege otherwise you can not be able to do so.',
            showText: false
        },
        {
            title: 'What is the maximum file size for upload?',
            svg: categoriesSVG,
            text: 'The maximum upload size for REAPS is 2MB. if you would like to upload a larger file size, it is advisable for you to keep itin a zip file before upload',
            showText: false
        },
        {
            title: 'Can the file size be increased?',
            svg: categoriesSVG,
            text: 'Only an adminstrative role can request a file upload increase.',
            showText: false
        },
        {
            title: 'how do i register under my school ?',
            svg: categoriesSVG,
            text: 'how do i register under my school ',
            showText: false
        },
    ])
    const handleShowtext = (element) => {
        const newArr = categoryList
            .map(obj =>
                obj.title === element.title
                    ? obj.showText
                        ? { ...obj, showText: false }
                        : { ...obj, showText: true }
                    : obj
            );
        setCategoryList(newArr)
    }
    return (
        <div>
            <div className='lg:px-20 px-10 my-[80px] flex items-center gap-10'>
                <p className='text-lg font-medium'>Categories:</p>
                <p className='text-primary'>FAQs</p>
                <p className='text-primary'>How to</p>
                <svg className='absolute lg:block hidden right-[50%]' width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.552 29.5419C28.9708 27.1144 29.2668 24.9116 29.74 22.7474C30.5822 18.8379 31.1406 14.8027 32.5036 11.0626C35.8518 1.90011 43.8677 -1.93485 52.9657 1.43481C57.1624 2.98521 61.0659 5.44448 64.8998 7.80769C67.5757 9.45527 68.2659 12.4077 67.1525 14.8561C66.0109 17.3503 63.1404 18.7808 60.1332 17.9968C58.1437 17.4834 56.2877 16.4935 54.3861 15.6743C52.416 14.8134 50.5241 13.7542 48.5029 13.0576C46.0328 12.1976 44.5567 12.7981 43.7368 15.2647C42.7682 18.1765 42.1855 21.2165 41.5691 24.2297C40.7226 28.3856 40.2774 32.6349 39.1787 36.7158C37.4069 43.3056 32.5767 45.6217 26.3597 42.8331C22.8751 41.2692 19.662 39.1017 16.3848 37.1095C12.4346 34.7006 8.52026 32.427 3.66413 32.1044C0.311478 31.8758 -0.948757 27.9673 1.17978 24.9526C3.28767 21.9662 6.44409 20.6376 9.87184 21.1012C12.9365 21.5167 16.0057 22.5467 18.8152 23.8501C22.115 25.3927 25.139 27.5205 28.552 29.5419Z" fill="#0077B6" fillOpacity="0.16" />
                </svg>

            </div>
            <div className='categories lg:h-[480px] overflow-y-auto'>
                <div className='lg:px-20 px-5 py-20 lg:w-[636px]'>
                    <p className='text-xl  px-2'>Frequently Asked Questions</p>
                    {
                        categoryList.map((element, index) => {
                            return (
                                <div className=' lg:w-[500px] ' key={index}>

                                    <p className='bg-white px-5 py-3 my-4 rounded-md flex text-primary justify-between text-sm'>
                                        {element.title}
                                        {element.showText ? <svg onClick={() => { handleShowtext(element) }} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.40866 4.51577L6.86348 9.9706L1.40866 15.4254C0.739305 16.0948 0.739305 17.1804 1.40866 17.8498L2.62084 19.062C3.29019 19.7313 4.37585 19.7313 5.04521 19.062L10.5 13.6071L15.9549 19.062C16.6242 19.7313 17.7099 19.7313 18.3792 19.062L19.5914 17.8498C20.2608 17.1804 20.2608 16.0948 19.5914 15.4254L14.1366 9.9706L19.5914 4.51577C20.2608 3.84642 20.2608 2.76076 19.5914 2.09141L18.3792 0.879226C17.7099 0.209874 16.6242 0.209872 15.9549 0.879224L10.5 6.33405L5.04521 0.879224C4.37585 0.209872 3.29019 0.209874 2.62084 0.879226L1.40866 2.09141C0.739307 2.76076 0.739303 3.84642 1.40866 4.51577Z" fill="#0077B6" />
                                        </svg>
                                            : <svg onClick={() => handleShowtext(element)} className='cursor-pointer' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.2857 9.42857H14.5714V1.71429C14.5714 0.767679 13.8038 0 12.8571 0H11.1429C10.1962 0 9.42857 0.767679 9.42857 1.71429V9.42857H1.71429C0.767679 9.42857 0 10.1962 0 11.1429V12.8571C0 13.8038 0.767679 14.5714 1.71429 14.5714H9.42857V22.2857C9.42857 23.2323 10.1962 24 11.1429 24H12.8571C13.8038 24 14.5714 23.2323 14.5714 22.2857V14.5714H22.2857C23.2323 14.5714 24 13.8038 24 12.8571V11.1429C24 10.1962 23.2323 9.42857 22.2857 9.42857Z" fill="#0077B6" />
                                            </svg>}
                                    </p>
                                    {element.showText ? <p className='ease-in-out duration-1000 my-4 px-4 py-4 bg-[#E9ECFF] lg:text-md text-xs'> {element.text}</p> : ''}
                                </div>)
                        })
                    }

                </div>
            </div>
        </div>
    )
}
