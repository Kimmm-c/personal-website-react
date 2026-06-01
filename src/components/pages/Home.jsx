import React, { useState } from 'react';
import ToggleSection from '../common/ToggleSection';
import Button from '../common/Button';
import kim from '../../assets/kim.JPG'

const Home = () => {
    const [activePage, setActivePage] = useState(null);
    const colWrapperClass = "col-sm-12 col-lg-4";
    // const abouts = ['Team Player', 'Tech Enthusiast', 'Business Acumen']

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
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-3">
                            <img src={kim} alt="profile-picture" className="rounded img-fluid" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        I am a final-year Computer Science student at the British Columbia Institute of Technology (BCIT), specializing in Game Development, with a focus on combining technical systems with visual storytelling. My work and interests sit at the intersection of programming and art, where I enjoy developing gameplay systems as well as contributing to the visual and creative side of game production.
                    </p>
                    <p>
                        As an RPG enthusiast, I am especially motivated by the creation of immersive, player-driven experiences. This has led me to pursue both technical and artistic development, including a foundation in traditional art and ongoing self-directed learning in digital animation.
                    </p>
                    <p>
                        I am particularly interested in technical art as a career direction, where I can apply both my programming and artistic skills. While I am open to a variety of developer roles, I am most excited by opportunities to work within experienced teams, contribute meaningfully to production pipelines, and continue growing toward a technical artist specialization.
                    </p>

                    {/* <div className="container">
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
                    <p>If my background and skills align with your needs, I would love to connect and discuss how I can contribute to your team!</p> */}
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