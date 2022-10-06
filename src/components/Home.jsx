import React from 'react'
import pepe from '../assets/pepe.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const home = () => {
    return (
        <div name="home" className='w-full bg-gradient-to-b from-white via-white to-cyan-50 pt-20'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center items-center p-4 text-center">
                    <div className="md:w-1/2">
                        <img src={pepe} alt="pepe" className='rounded-2xl mx-auto w-3/5 ' />
                    </div>
                    <p className='text-gray-800 py-4 max-w-md font-extralight'>
                        I don't want to miss out on a great opportunity, just as much as you don't want to miss out on a valuable team player.
                    </p>

                    <div className="justify-center">
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>< MdKeyboardArrowRight size={25} className='ml-1' /></span>
                        </Link>
                    </div>
                </div>
                {/* <div className="md:w-1/2">
                    <img src={HeroImage} alt="portrait" className='rounded-2xl mx-auto w-4/5 md:w-full' />
                </div> */}
            </div>
        </div>
    )
}

export default home