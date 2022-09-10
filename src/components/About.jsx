import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-purple-800 to bg-gray-900 text-white pt-10'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl'>
                    I am a BCIT Computer Systems student. My projects were built using Python, Javascript (Node, EJS, Express, React), NoSQL (Firestore, MongoDB), SQL (MySQL), and HTML/CSS/Boostrap. I'm interested in learning more about Python Automation/Web Scraping, Cloud Computing, and Entrepreneurship.  
                </p>

            </div>
        </div>
    )
}

export default About