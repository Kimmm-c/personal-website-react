import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-cyan-50 to-cyan-200 text-black pt-10'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-justify">
                <div className="pb-8">
                    <p className='text-4xl font-bold text-cyan-700 line-through'>About</p>
                    <p className='text-4xl font-bold text-cyan-700'>What do I bring?</p>
                </div>
                <p className='pb-5 text-base text-black font-extralight'>
                    I'm a BCIT Computer Systems student who is looking for a Co-op opportunity (starting from January, 2023) after my first year of education.
                </p>
                <p className='pb-5 text-base text-black font-extralight'>
                    Wait, one-year experience is a bit short, isn't it?
                </p>
                <p className='pb-5 text-base text-black font-extralight'>
                    But from a different perspective, wouldn't you want to work with someone who can quickly learn and get straight to the business? Here is what I bring to table:
                </p>
                <p className='text-base text-black'>
                    <ul className="font-normal text-cyan-900 pl-7">
                        <li>
                            - A passionate problem solver with a great perseverance.
                        </li>

                        <li>
                            - A responsible and reliable teammate.
                        </li>

                        <li>
                            - A hunger for real-world experience and technologies.
                        </li>
                    </ul>
                </p>
                <p className='text-base text-black font-extralight pt-5'>
                    Besides, I have a diverse work experience ranging from Accounting to Customer Service. This means I come with interpersonal skills and attention to details! If my offer sounds fair to you, let's get in touch!
                </p>
                <p className='text-base text-black font-extralight pt-5'>
                    What's more? Please check out my projects and technical experience right below.
                </p>

            </div>
        </div>
    )
}

export default About