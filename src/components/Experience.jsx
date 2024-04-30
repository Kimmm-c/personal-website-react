import React from 'react'

const Experience = () => {
    const work_experience = [
        {
            title: 'Junior Developer at CAMS Software',
            intro: 'CAMS Software offers a comprehensive Transportation Suite tailored for the grocery industry, managing inbound products, order capture, route optimization, dispatch, ELD, driver payroll, and reporting. During my time at CAMS, I had opportunity to:',
            bullets: [
                "Develop a conference website for hosting the company’s Summit events, utilizing Angular, Bootstrap, and .NET.",
                "Utilize SQL Server stored procedures to support the business logic of the company’s desktop software and web application. ",
                "Enhance efficiency with more than 50 automated tests using Cypress and Typescript.",
                "Collaborate with a co-op peer to seamlessly integrate the test suite into Azure's CI/CD pipeline.",
                "Documente test suite and procedures in Confluence for easy reference."

            ]
        }
    ]

    const industry_projects = [
        {
            title: 'Developer at Stack Moxie',
            intro: "Stack Moxie offers a Revenue Observability platform empowering companies to manage revenue stacks and gain insights into their revenue infrastructure. Built atop an open-source behavioral testing framework, it facilitates testing various scenarios encompassing both front-end and API-driven aspects. In a group of 4, we:",
            bullets: [
                "Expanded the scenario-based test library to assess multiple large language models like GPT, Gemini, and Anthropic.",
                "Extended the behavioural-testing framework to allow response time and token cost analysis. ",
                "Implemented a logging system to store the test results in Azure blob storage.",
                "Created a synthetic data generation tool which aims to enhance user experience."
                
            ]
        }
    ]

    return (
        <div name="experience" className='bg-x-light-grey w-full h-full p-10 text-grey'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-3xl font-bold text-dark-turquoise'>Experience</p>
                </div>

                <div className="py-5">
                    <p className='text-xl font-bold text-dark-turquoise'>Co-op Experience</p>
                    {
                        work_experience.map(({ title, intro, bullets }) => (
                            <div key={title}>
                                <p className='text-lg text-dark-turquoise'>{title}</p>
                                <p>{intro}</p>
                                <ul className='list-disc pl-7'>
                                    {
                                        bullets.map((bullet, index) => (
                                            <li key={index} className='text-base'>{bullet}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className="py-5">
                    <p className='text-2xl font-bold text-dark-turquoise'>Industry Projects</p>
                    {
                        industry_projects.map(({ title, intro, bullets }) => (
                            <div key={title}>
                                <p className='text-lg text-dark-turquoise'>{title}</p>
                                <p>{intro}</p>
                                <ul className='list-disc pl-7'>
                                    {
                                        bullets.map((bullet, index) => (
                                            <li key={index} className='text-base'>{bullet}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience