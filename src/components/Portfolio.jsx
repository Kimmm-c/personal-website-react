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
        <div name="portfolio" className='bg-gradient-to-b from-gray-900 to-indigo-900 w-full text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-10 text-xl'>Some of my projects.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, href }) => (
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
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