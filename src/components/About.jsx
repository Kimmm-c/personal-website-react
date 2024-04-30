import React from 'react'
import kim from '../assets/kim.png'

const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-cyan-50 to-cyan-200 text-black p-10'>
            <div className="flex flex-col md:flex-row px-10 justify-around">
                <div className="md:w-1/3">
                    <img src={kim} alt="profile_pic" className='rounded-2xl' />
                </div>
                <div className="md:w-1/2 m-5 text-base font-light">
                    <p className="text-4xl font-bold text-grey">About</p>
                    <br />
                    <ul class="list-image-checkmark list-inside">
                        <li> Team Player</li>
                        <li> Tech Enthusiast</li>
                        <li> Will Try and Do Try Mindset</li>
                    </ul>
                    <br />
                    <p>I am a dedicated Computer Systems Technology student enrolled in the BCIT Co-op Program, actively pursuing opportunities to merge classroom knowledge with real-world industry experience.</p>
                    <br />
                    <p>Driven by a passion for exploring and mastering new technologies, I thrive in dynamic environments where innovation and creativity are valued. </p>
                    <br />
                    <p className="">If my profile resonates with your requirements, please don't hesitate to contact me!</p>
                </div>
            </div>
        </div>
    )
}

export default About