import React, { useState } from 'react'

export default function StickyChart() {
    const [showCaht, setSHowChat] = useState(false)
    const handleShowChat = () => {
        setSHowChat(showCaht => !showCaht)
    }
    return (
        <div className='flex flex-col'>
            {
                showCaht && <div className='fixed right-[9%] top-[18%] bg-white h-[450px] w-[300px] rounded-2xl shadow-xl flex flex-col z-50'>
                    <div className='bg-primary flex justify-center rounded-t-2xl py-5 '>
                        <p className='text-white'>LIVE CHART</p>
                    </div>
                    <div></div>
                </div>
            }
            <div className='fixed right-[3.5%] top-[80%] z-10 cursor-pointer' onClick={handleShowChat}>
                <svg width="80" height="80" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M44 88C19.6983 88 0 68.3017 0 44C0 19.6983 19.6983 0 44 0C68.3017 0 88 19.6983 88 44C88 68.3017 68.3017 88 44 88ZM44.77 64.1438C47.597 66.099 51.183 67.2622 55.066 67.2622C56.0313 67.2622 56.9855 67.1907 57.9232 67.0505C58.245 67.1825 58.5557 67.3448 58.938 67.5648C59.763 68.0488 60.8657 68.7912 62.238 69.7922C63.3627 70.6145 64.955 69.8197 64.955 68.4365V64.4187C65.5325 64.0447 66.077 63.6405 66.5913 63.2032C69.6988 60.5687 71.5 56.9662 71.5 53.1025C71.5 50.5587 70.73 48.18 69.377 46.1258C68.9505 47.5845 68.3726 48.9947 67.6527 50.3332C67.9387 51.2215 68.09 52.1482 68.09 53.1025C68.09 55.946 66.748 58.63 64.372 60.643C63.759 61.1609 63.0989 61.6203 62.4002 62.0153C62.1414 62.1614 61.926 62.3736 61.7757 62.6301C61.6255 62.8866 61.5459 63.1783 61.545 63.4755V65.1915C59.9142 64.1465 58.795 63.6542 57.9425 63.6542C57.8466 63.6545 57.751 63.6628 57.6565 63.679C55.2673 64.0786 52.8179 63.9185 50.501 63.2115C48.6244 63.6989 46.7069 64.0119 44.7728 64.1465L44.77 64.1438ZM24.2385 56.1082C25.1453 56.8755 26.1047 57.5785 27.1095 58.212V65.065C27.1095 66.7975 29.1032 67.7875 30.5085 66.759C34.386 63.9265 37.081 62.326 37.7548 62.1665C39.3113 62.414 40.9007 62.5377 42.5067 62.5377C56.8067 62.5377 68.5163 52.6185 68.5163 40.2078C68.5163 27.7943 56.804 17.875 42.5067 17.875C28.2095 17.875 16.5 27.7942 16.5 40.205C16.5 46.2825 19.3325 51.9502 24.2385 56.1082ZM37.8482 57.9398C36.465 57.9398 34.4438 58.916 31.3748 60.9758V57.024C31.3734 56.652 31.2734 56.287 31.085 55.9662C30.8966 55.6454 30.6265 55.3804 30.3023 55.198C29.137 54.5385 28.0358 53.7716 27.0132 52.9073C23.0175 49.5275 20.7625 45.0065 20.7625 40.205C20.7625 30.2775 30.4315 22.088 42.5067 22.088C54.5847 22.088 64.251 30.2775 64.251 40.205C64.251 50.1325 54.5847 58.3247 42.5067 58.3247C41.0492 58.3247 39.611 58.2038 38.2057 57.9673C38.0876 57.9482 37.968 57.939 37.8482 57.9398V57.9398ZM31.4215 44.4207C33.3052 44.4207 34.8315 42.9083 34.8315 41.0493C34.8315 39.1875 33.3052 37.6778 31.4215 37.6778C29.5377 37.6778 28.0115 39.1875 28.0115 41.0493C28.0115 42.911 29.5377 44.4207 31.4215 44.4207ZM42.5067 44.4207C44.3905 44.4207 45.9168 42.9083 45.9168 41.0493C45.9168 39.1875 44.3905 37.6778 42.5067 37.6778C40.623 37.6778 39.0968 39.1875 39.0968 41.0493C39.0968 42.911 40.623 44.4207 42.5067 44.4207V44.4207ZM53.592 44.4207C55.4758 44.4207 57.002 42.9083 57.002 41.0493C57.002 39.1875 55.4758 37.6778 53.592 37.6778C51.7083 37.6778 50.182 39.1875 50.182 41.0493C50.182 42.911 51.7083 44.4207 53.592 44.4207Z" fill="#0077B6" />
                </svg>

            </div>
        </div>
    )
}
