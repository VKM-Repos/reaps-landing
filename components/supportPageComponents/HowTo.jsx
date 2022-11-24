import React from 'react'
import Image from 'next/image'
import assignRole1 from '@assets/assign_role1.svg'
import assignRole2 from '@assets/assign_rol2.svg'
import assignReq1 from '@assets/assign_req1.svg'
import assignReq2 from '@assets/assign_req2.svg'
import assignUser1 from '@assets/assign_user1.svg'
import assignUser2 from '@assets/assign_user2.svg'
import review1 from '@assets/review1.svg'
import recort1 from '@assets/recort1.svg'
import recort2 from '@assets/report2.svg'
import allReport1 from '@assets/all_report1.svg'
import allReport2 from '@assets/all_report2.svg'

export default function HowTo() {
    const howToList = [
        {
            title: 'How to assign roles as an admin?',
            text: 'once you have login into your admin dashboard, click on systm admin which will provide a drop down  then selct mange admin fro the options provideed the view will show a list of users and by the right of the users you ca can see their roles, click on ugrade to change roles.',
            pictuturs: [assignRole1, assignRole2]
        },
        {
            title: 'How to assign a request to a reviewer ?',
            text: 'As an admin tou can view request made once you select  ethical approval and by the right of the request list there is an action button that allows an admin to assign to reviewers.',
            pictuturs: [assignReq1, assignReq2]
        },
        {
            title: 'How to create a user account ?',
            text: 'Note: you have to be an admin to be a ble to do this. Once logged in, select system admin and select the option manage users, on the view screen select create account button.',
            pictuturs: [assignUser1, assignUser2]
        },
        {
            title: 'How to review a request ?',
            text: 'Once assigned the role of a reviewer, o slect ethical approval shown on the dashboard then select review request. a list of request assigned to your dashboard will be displayed you can select easch request and review',
            pictuturs: [review1]
        },
        {
            title: 'How to get  a record of financial activities on the system ?',
            text: 'Only an admin has access to get reports. Select report on the dashboard then select financial report from the list, at the top of the view 3 different file types are avalable for download which contain current finacial report.',
            pictuturs: [recort1, recort2]
        },
        {
            title: 'How to get  a record of all activities on the system',
            text: 'Only an admin has access. once logged in , by the dashboard view 2 views are available select system dashboard and click on the export button on the right top corner',
            pictuturs: [allReport1, allReport2]
        }
    ]
    return (
        <div className='lg:px-20 px-10 my-10'>
            <p className='lg:text-2xl text-xl font-semibold lg:my-20 my-14'>How To</p>
            <div className='grid lg:grid-cols-2 gap-10 mb-40 justify-center'>
                {
                    howToList.map((item, index) => (
                        <div className='lg:w-[500px]'>
                            <p className='lg:text-lg text-sm font-semibold  text-gray-700 mb-2'>{item.title}</p>
                            <p className='lg:text-sm text-xs leading-[20px]'>{item.text}</p>
                            <div className='flex flex-col items-center gap-3 my-2'>
                                <button className='flex justify-center text-lg text-gray-500 px-2 py-1 rounded-md'>Click to view</button>
                                <div className='flex gap-5'>
                                    {item.pictuturs.length > 0
                                        ? item.pictuturs.map(picture => <Image src={picture} width={150} height={120} />)
                                        : ''
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
