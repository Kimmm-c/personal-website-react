import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-purple-800'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className='text-3xl sm:text-5xl font-bold text-white'>I'm an active learner who loves to take on challenges</h2>

                    <p className='text-gray-300 py-4 max-w-md font-extralight'>
                        I am a BCIT Computer Systems student.
                    </p>

                    <div className="">
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>< MdKeyboardArrowRight size={25} className='ml-1'/></span>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <img src={HeroImage} alt="portrait" className='rounded-2xl mx-auto w-4/5 md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default home