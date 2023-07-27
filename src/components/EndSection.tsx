import { FC } from 'react'

const EndSection = ({ }) => {
    return (
        <div className="w-[1112px] h-[647px] relative">
            <div className="rounded-full bg-[#44ffa1] w-[477px] h-[477px] absolute top-0 left-0">
                <img src="/images/image-founder.webp" alt="" className="w-[477px] h-[477px]" />
            </div>
            <div className="w-[730px] h-[454px] bg-[#34053e] p-[64px] flex flex-col items-start gap-[32px] absolute bottom-[32px] right-0">
                <h1 className='text-white text-[56px] font-bold'>Be the first to test</h1>
                <p className='text-white text-[18px] w-[602px] leading-[32px]'>Hi, Im Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                <button className='bg-[#44ffa1] text-[#24053e] px-[25px] py-[15px] font-bold'>Apply for access</button>
            </div>
        </div>
    )
}

export default EndSection