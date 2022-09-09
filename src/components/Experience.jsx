import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"

const Experience = () => {

    const tools = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: github,
            title: "GitHub",
            style: 'shadow-gray-500'
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-indigo-900 to-black w-full h-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-8 text-xl'>The technologies I have worked with.</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 w-full py-8 text-center'>
                    {
                        tools.map(({ id, src, title, style }) => (
                            <div key={id} className={'shadow-md rounded-lg py-2 hover:scale-105 duration-500 ' + style}>
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience