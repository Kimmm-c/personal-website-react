import React from 'react';
import ExpandableSection from '../common/ExpandableSection';
import neo from '../../assets/projects/neo.png';
import fitnesstracker from '../../assets/projects/pose-est.png';
import appDemo from '../../assets/projects/appDemo.mp4';
import allez from '../../assets/projects/allez.mp4';
import stone from '../../assets/projects/stone.mp4';
import sunkencity from '../../assets/projects/sunkencity.mp4';
import cli from '../../assets/projects/cli-automation-tool.png';
import escaper from '../../assets/projects/esaper.png'

const Projects = () => {
    const projects = [
        {
            src: '',
            href: '',
            video: sunkencity,
            contents: [
                {
                    title: "Project Description",
                    text: "A 2D platformer vertical slice developed in Unity. I designed and built a cohesive level set in a submerged mythical city, using environmental storytelling, pacing, and spatial layout to guide player progression. I implemented puzzle-driven gameplay sequences that gate key objectives and reinforce exploration and discovery. I also integrated custom Blender assets with existing game resources to maintain visual consistency and support a unified atmospheric style across the level."
                },
                {
                    title: "Technologies",
                    text: "Blender, Unity, C#, Lighting, VFX"
                }
            ],
            title: "Sunken City"
        },
        {
            src: '',
            href: 'https://github.com/Kimmm-c/Stone.git',
            video: stone,
            contents: [
                {
                    title: "Project Description",
                    text: "A 2D projectile-based game engine and playable artillery game built in C++ using SDL. I designed and implemented a modular Entity-Component-System (ECS) architecture with an event-driven design to support scalable and maintainable systems. This abstraction enabled loosely coupled interactions across gameplay systems such as input, physics, collision, and game state management. I also developed core gameplay features including projectile physics, destructible terrain, turn-based mechanics, and dynamic camera tracking, delivering the project independently within a 5-week timeframe."
                },
                {
                    title: "Technologies",
                    text: "C++, SDL3, Visual Studio"
                }
            ],
            title: "Stone"
        },
        {
            src: '',
            href: '',
            video: allez,
            contents: [
                {
                    title: "Project Description",
                    text: "A 3D fencing combat game built in Unity as part of a 5-person team. I led the art production pipeline, creating and animating all in-game assets using Blender and preparing them for seamless integration into Unity. I independently self-taught Blender during development and delivered characters, props, and animations under strict milestone deadlines. I also collaborated closely with developers to align art production with gameplay priorities, ensuring consistent and timely feature delivery throughout the project."
                },
                {
                    title: "Technologies",
                    text: "Blender, C#, Unity"
                }
            ],
            title: "Allez"
        },
        // {
        //     src: escaper,
        //     href: 'https://github.com/Kimmm-c/escaper-game-dev',
        //     video: '',
        //     contents: [
        //         {
        //             title: "Project Description",
        //             text: "This project is focused on learning C++. Escaper is a C++ text-based adventure game where players navigate a grid-based map using the arrow keys, starting from the top-left corner and aiming to reach the bottom-right corner while avoiding walls. The difficulty level and map size are customizable, offering a new challenge with every playthrough."
        //         },
        //         {
        //             title: "Technologies",
        //             text: "C++"
        //         }
        //     ],
        //     title: "Escaper"
        // },
        // {
        //     src: '',
        //     href: '',
        //     video: appDemo,
        //     contents: [
        //         {
        //             title: "Project Description",
        //             text: "This project involves the development of a comprehensive e-commerce website, allowing users to browse products, add items to their carts, and proceed to checkout at their convenience. The payment system is integrated with Stripe, ensuring secure and reliable transactions. The website is built using modern web technologies, including Next.js for server-side rendering and React-based components, TailwindCSS for responsive and customizable styling, and React for dynamic front-end interactivity. Data management is handled by a PostgreSQL database, ensuring robust and scalable storage. The front-end of the application is deployed on Vercel, providing optimized performance and easy deployment workflows. The backend is hosted on an AWS EC2 instance, offering reliable server management and scalability. The database is securely hosted on AWS RDS, ensuring data integrity and accessibility."
        //         },
        //         {
        //             title: "Technologies",
        //             text: "JavaScript, Next.js, React, PostgreSQL, AWS EC2, AWS RDS, TailwindCSS."
        //         }
        //     ],
        //     title: "E-commerce Website"
        // },
        // {
        //     src: cli,
        //     href: 'https://github.com/Kimmm-c/automate-create-remote-repo',
        //     video: '',
        //     contents: [
        //         {
        //             title: "Project Description",
        //             text: "This tool simplifies setting up a local Git repo, creating a remote GitHub repo via the API, optionally adding a ‘.gitignore’ file, and handling staging, committing, and pushing—all in one seamless process. Built with object-oriented Python and available on PyPI, it offers a solution for efficient Git management."
        //         },
        //         {
        //             title: "Technologies",
        //             text: "Object-oriented Python."
        //         }
        //     ],
        //     title: "CLI Automation Tool"
        // },
        // {
        //     src: fitnesstracker,
        //     href: 'https://github.com/Kimmm-c/fitness-tracker',
        //     video: '',
        //     contents: [
        //         {
        //             title: "Project Description",
        //             text: "Embarking on an innovative journey into the realm of Machine Learning, this Python-based project harnesses the power of Mediapipe’s advanced Pose Estimation model to revolutionize workout monitoring. Designed as an experimental exploration, this endeavor pushes the boundaries of how pre-trained models can be practically applied to real-world scenarios."
        //         },
        //         {
        //             title: "Technologies",
        //             text: "Python, OpenCV, MediaPipe."
        //         }
        //     ],
        //     title: "Fitness Tracker"
        // },
        // {
        //     src: neo,
        //     href: 'https://kimmmc.pythonanywhere.com/about/',
        //     video: '',
        //     contents: [
        //         {
        //             title: "Project Description",
        //             text: "In the vast expanse of outer space, numerous objects orbit around us, some much closer than we might realize. Despite their seeming distance, objects as close as 70,000 kilometers have the potential to disrupt natural phenomena on Earth. It's crucial for us to understand the nature of these objects, particularly those that pose potential harm. \nOur SpaceGuard AI project is trained on NASA’s extensive Near-Earth Object dataset, which comprises over 90,000 entry points. This vast repository of data provides a comprehensive foundation for our model, enabling it to identify patterns and correlations that signal potential threats from space."
        //         },
        //         {
        //             title: "Technologies",
        //             text: "Python, Django, ML libraries such as Pandas, Scikit-learn, Matplotlib, etc.."
        //         }
        //     ],
        //     title: 'SpaceGuard AI'
        // }
    ]

    return (
        <div className="container py-3">
            {
                projects.map(({ title, src, contents, href, video }, index) => (
                    <div key={index}>
                        <ExpandableSection section={title} sectionId={`project-${index}`} image={src} video={video} contents={contents} href={href} />
                    </div>
                ))
            }
        </div>
    )
}

export default Projects;