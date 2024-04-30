import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const home = () => {
    return (
        <div name="home" className="p-10 bg-gradient-to-r from-wine-red  via-dark-turquoise via-turquoise to-pale-blue">
            <div className="p-5 tracking-wider uppercase text-x-light-grey">
                <p className='py-4 max-w-md text-5xl font-bold'>
                    Searching for a will-try mindset?
                </p>
                <p className="text-4xl">Your quest ends here.</p>

                <div className="justify-center my-5">
                    <Link to="portfolio" smooth duration={500} className='group text-wine-red w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pale-blue to-light-blue'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>< MdKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default home