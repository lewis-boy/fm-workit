import { FC } from 'react'

const Navbar = ({ }) => {
    return (
        <nav>
            <div className="text-[32px]  bg-[#24053e] text-white flex align-center justify-between px-[165px] pt-[56px]">
                <p className="font-bold">work<span className="font-light">it</span></p>
                <div className="text-[18px] border-b-4 border-[#44ffa1]">
                    <p>Apply for access</p>
                </div>

            </div>
        </nav>
    )
}

export default Navbar