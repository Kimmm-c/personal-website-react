import React from 'react'
import pokeebar from '../assets/portfolio/pokeebar.png'
import swordmen from '../assets/portfolio/swordmen.png'
import fitnesstracker from '../assets/portfolio/pose-est.png'

const Portfolio = () => {

    const portfolios = [
        {
            src: fitnesstracker,
            href: 'https://github.com/Kimmm-c/fitness-tracker',
            description: "A Python-based Machine Learning endeavor, utilizes Mediapipe’s Pose Estimation model to monitor workout sessions. This experimental project delves into the practical applications of pre-trained models."
        },
        {
            src: swordmen,
            href: 'https://zesty-salamander-7a9682.netlify.app',
            description: 'A fighting game built using object-oriented JavaScript.'
        },
        {
            src: pokeebar,
            href: 'https://stormy-springs-83483.herokuapp.com/home',
            description: 'A Pokemon-search web application. Built using MongoDB, Express.js, Node.js, jQuery, REST API'
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-cyan-200 to-white w-full text-white p-10 bg-dark-turquoise'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="text-center pb-5">
                    <p className='text-4xl font-bold text-white'>Projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ src, href, description }, index) => (
                            <div key={index} className="shadow-md bg-x-light-grey rounded-lg">
                                <img src={src} alt="" className="duration-200 hover:scale-105 h-100" />
                                <div className="flex flex-col items-center justify-center text-black">
                                    <a className='group w-full text-center px-6 m-4 duration-200 hover:scale-110' href={href} target="_blank" rel="noreferrer">OPEN</a>
                                    <p className='pb-5 px-3 text-black font-extralight'>{description}</p>
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