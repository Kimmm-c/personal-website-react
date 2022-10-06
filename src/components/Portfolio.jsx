import React from 'react'
import pokeebar from '../assets/portfolio/pokeebar.png'
import foodbuddy from '../assets/portfolio/foodbuddy.png'
import friend from '../assets/portfolio/friend.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: pokeebar,
            href: 'https://stormy-springs-83483.herokuapp.com/home'
        },
        {
            id: 2,
            src: foodbuddy,
            href: 'https://dtc04-foodbuddy.herokuapp.com'
        },
        {
            id: 3,
            src: friend,
            href: 'https://dtc09-friend.netlify.app/login.html'
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-cyan-200 to-white w-full text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold text-cyan-700'>Portfolio</p>
                    <p className='pt-5 text-base font-extralight text-black'>My project heavily focused on web application development following the mobile-first design principles. These projects gave me a chance to experience with different tools such as Javascript (Node, EJS, Express, React), NoSQL (Firestore, MongoDB), SQL (MySQL), and HTML/CSS/Boostrap.</p>
                    <p className='py-5 text-base font-extralight text-black'>Other than web development tools, I also have experience working with Python (Unittest) and Java.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, href }) => (
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center text-black">
                                    <a className='group w-full text-center px-6 py-3 m-4 duration-200 hover:scale-110' href={href} target="_blank" rel="noreferrer">Open</a>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio