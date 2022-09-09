import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installlNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: installlNode
        }

    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-gray-900 to-indigo-900 w-full text-white md:h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-10 text-xl'>Some of my projects.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
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