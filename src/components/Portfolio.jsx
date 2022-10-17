import React from 'react'
import pokeebar from '../assets/portfolio/pokeebar.png'
import foodbuddy from '../assets/portfolio/foodbuddy.png'
import friend from '../assets/portfolio/friend.png'
import swordmen from '../assets/portfolio/swordmen.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: swordmen,
            href: 'https://zesty-salamander-7a9682.netlify.app',
            description: 'A simple fighting game built using object-oriented JavaScript. The purpose of this project is to learn animation!'
        },
        {
            id: 2,
            src: pokeebar,
            href: 'https://stormy-springs-83483.herokuapp.com/home',
            description: 'A Pokemon-search web application. Built using MongoDB, Express.js, Node.js, jQuery, REST API'
        },
        {
            id: 3,
            src: foodbuddy,
            href: 'https://dtc04-foodbuddy.herokuapp.com',
            description: 'A web-application aiming to sooth the pain from grocery expense during inflation.'
        },
        {
            id: 4,
            src: friend,
            href: 'https://dtc09-friend.netlify.app/login.html',
            description: 'My first collaborative project. This web app was designed to help Canadian elite athletes to cope with stress.'
        },
        
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-cyan-200 to-white w-full text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-justify">
                    <p className='text-4xl font-bold text-cyan-700'>Portfolio</p>
                    <p className='pt-5 text-base font-extralight text-black'>My projects heavily focused on web application development following the mobile-first design principles. These projects gave me a chance to experience with different tools such as Javascript (Node, EJS, Express, React), NoSQL (Firestore, MongoDB), SQL (MySQL), and HTML/CSS/Boostrap.</p>
                    <p className='py-5 text-base font-extralight text-black'>Other than web development tools, I also have experience working with Python (Unittest) and Java (OOP).</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, href, description }) => (
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 h-100" />
                                <div className="flex flex-col items-center justify-center text-black">
                                    <a className='group w-full text-center px-6 m-4 duration-200 hover:scale-110' href={href} target="_blank" rel="noreferrer">OPEN</a>
                                    <p className='text-center pb-5 px-3 text-base text-black font-extralight'>{description}</p>
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