const Hero = ({ }) => {
    return (
        <div className="bg-[#24053E] w-full h-[730px]">
            <div className="flex flex-col justify-center items-center relative gap-[50px]">
                <div className="flex flex-col gap-[37px] items-center">
                    <h1 className="w-[635px] h-[160px] text-white text-center font-semibold text-[80px] leading-[80px] outline">Data <span className="underlined">tailored</span> to your needs.</h1>
                    <button className="bg-[#44ffa1] p-2 text-black w-20 h-20 "> Learn more</button>
                </div>
                <img src="./images/image-hero.webp" alt="" className="absolute top-[454px] w-[767px] h-[441px]" />
            </div>
        </div>
    )
}

export default Hero