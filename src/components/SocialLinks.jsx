import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>

            ),
            href: 'https://www.linkedin.com/in/kim-chung-874917110/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>

            ),
            href: 'https://github.com/Kimmm-c',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>

            ),
            href: 'mailto: kchung68@my.bcit.ca',
            style: 'rounded-br-md'
        }
    ]

    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-cyan-600 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks