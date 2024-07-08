import React, { useState } from 'react';
import ToggleSection from '../common/ToggleSection';
import Button from '../common/Button';
import kim from '../../assets/kim.png'

const Home = () => {
    const [activePage, setActivePage] = useState(null);
    const colWrapperClass = "col-sm-12 col-lg-4";
    const abouts = ['Team Player', 'Tech Enthusiast', 'Business Acumen']

    const Pages = Object.freeze({
        EXPERIENCE: 'Experience',
        PROJECTS: 'Projects',
        CONTACT: 'Contact'
    });

    const btnHandler = activePage => {
        setActivePage(activePage);
    }

    return (
        <div>
            <div className="container font-monospace text-center">
                <div className="container mt-2">
                    <h1 className="font-monospace fw-bold text-uppercase">Kim Chung</h1>
                </div>

                <div className="container px-5 py-3">
                    <img src={kim} alt="profile-picture" className="rounded img-fluid" />
                </div>
                <div>
                    <p>
                        I am a dedicated Computer Science student with a specialization in Predictive Modeling, actively seeking opportunities to apply my academic knowledge to real-world industry challenges. With experience in various roles, including web development and automation testing, I bring a versatile skill set and a passion for technology to every project.
                    </p>
                    <div className="container">
                        {
                            abouts.map((trait, index) => (
                                <p key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                    </svg>
                                    {` ${trait}`}
                                </p>
                            ))
                        }
                    </div>
                    <p>If my background and skills align with your needs, I would love to connect and discuss how I can contribute to your team!</p>
                </div>
            </div>

            <div className="container container-fluid">
                <div className="row align-items-center justify-content-around ">
                    <Button wrapperClass={colWrapperClass} label={Pages.EXPERIENCE} onclick={() => btnHandler(Pages.EXPERIENCE)} />
                    <Button wrapperClass={colWrapperClass} label={Pages.PROJECTS} onclick={() => btnHandler(Pages.PROJECTS)} />
                    <Button wrapperClass={colWrapperClass} label={Pages.CONTACT} onclick={() => btnHandler(Pages.CONTACT)} />
                </div>
                <ToggleSection activeSection={activePage} />
            </div>
        </div>
    )
}

export default Home;