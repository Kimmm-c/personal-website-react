import React from 'react';
import Content from '../common/Content';

const Experience = () => {
    const experiences = [
        {
            title: 'Junior Developer at CAMS Software (Co-op)',
            intro: 'CAMS Software offers a comprehensive Transportation Suite tailored for the grocery industry, managing inbound products, order capture, route optimization, dispatch, ELD, driver payroll, and reporting. During my time at CAMS, I had opportunity to:',
            bullets: [
                "Develop a conference website for hosting the company’s Summit events, utilizing Angular, Bootstrap, and .NET.",
                "Utilize SQL Server stored procedures to support the business logic of the company’s desktop software and web application. ",
                "Enhance efficiency with more than 50 automated tests using Cypress and Typescript.",
                "Collaborate with a co-op peer to seamlessly integrate the test suite into Azure's CI/CD pipeline.",
                "Documente test suite and procedures in Confluence for easy reference."

            ]
        },
        {
            title: 'Developer at Stack Moxie (ISSP)',
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
        <div className="container my-3 p-3 rounded bg-light opacity-75 content-container">
            {
                experiences.map(({ title, intro, bullets }, index) => (
                    <div key={index}>
                        <Content title={title} text={intro}/>
                        <ul>
                            {
                                bullets.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default Experience;