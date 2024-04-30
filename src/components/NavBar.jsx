import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            link: 'home'
        },
        {
            link: 'experience'
        },
        {
            link: 'about'
        },
        {
            link: 'portfolio'
        },
    ]
    return (
        <div className='w-full text-dark-turquoise p-5'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-3xl font-signature ml-2 font-bold'>
                        Kim Chung
                    </h1>
                </div>

                <ul className='hidden md:flex'>
                    {links.map(({ link }, index) => (
                        <li key={index} className='px-4 cursor-pointer capitalize font-medium text-cyan-900 hover:scale-110 duration-200'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}

                </ul>

                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black md:hidden'>
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-x-light-grey via-light-blue via-dark-turquoise to-wine-red text-x-light-grey'>
                        {links.map(({ link }, index) => (
                            <li key={index} className='px-4 cursor-pointer capitalize py-6 text-3xl font-light'>
                                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    )
}

export default NavBar