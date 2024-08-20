import React from 'react';
import ExpandableSection from '../common/ExpandableSection';
import neo from '../../assets/projects/neo.png';
import fitnesstracker from '../../assets/projects/pose-est.png';
import appDemo from '../../assets/projects/appDemo.mp4';

const Projects = () => {
    console.log(appDemo);
    console.log(neo);
    const projects = [
        {
            src: '',
            href: '',
            video: appDemo,
            contents: [
                {
                    title: "Project Description",
                    text: "This project involves the development of a comprehensive e-commerce website, allowing users to browse products, add items to their carts, and proceed to checkout at their convenience. The payment system is integrated with Stripe, ensuring secure and reliable transactions. The website is built using modern web technologies, including Next.js for server-side rendering and React-based components, TailwindCSS for responsive and customizable styling, and React for dynamic front-end interactivity. Data management is handled by a PostgreSQL database, ensuring robust and scalable storage. The front-end of the application is deployed on Vercel, providing optimized performance and easy deployment workflows. The backend is hosted on an AWS EC2 instance, offering reliable server management and scalability. The database is securely hosted on AWS RDS, ensuring data integrity and accessibility."
                },
                {
                    title: "Technologies",
                    text: "JavaScript, Next.js, React, PostgreSQL, AWS EC2, AWS RDS, TailwindCSS."
                }
            ],
            title: "E-commerce Website"
        },
        {
            src: '',
            href: 'https://github.com/Kimmm-c/automate-create-remote-repo',
            video: '',
            contents: [
                {
                    title: "Project Description",
                    text: "This tool simplifies setting up a local Git repo, creating a remote GitHub repo via the API, optionally adding a ‘.gitignore’ file, and handling staging, committing, and pushing—all in one seamless process. Built with object-oriented Python and available on PyPI, it offers a solution for efficient Git management."
                },
                {
                    title: "Technologies",
                    text: "Object-oriented Python."
                }
            ],
            title: "CLI Automation Tool"
        },
        {
            src: fitnesstracker,
            href: 'https://github.com/Kimmm-c/fitness-tracker',
            video: '',
            contents: [
                {
                    title: "Project Description",
                    text: "Embarking on an innovative journey into the realm of Machine Learning, this Python-based project harnesses the power of Mediapipe’s advanced Pose Estimation model to revolutionize workout monitoring. Designed as an experimental exploration, this endeavor pushes the boundaries of how pre-trained models can be practically applied to real-world scenarios."
                },
                {
                    title: "Technologies",
                    text: "Python, OpenCV, MediaPipe."
                }
            ],
            title: "Fitness Tracker"
        },
        {
            src: neo,
            href: 'https://kimmmc.pythonanywhere.com/about/',
            video: '',
            contents: [
                {
                    title: "Project Description",
                    text: "In the vast expanse of outer space, numerous objects orbit around us, some much closer than we might realize. Despite their seeming distance, objects as close as 70,000 kilometers have the potential to disrupt natural phenomena on Earth. It's crucial for us to understand the nature of these objects, particularly those that pose potential harm. \nOur SpaceGuard AI project is trained on NASA’s extensive Near-Earth Object dataset, which comprises over 90,000 entry points. This vast repository of data provides a comprehensive foundation for our model, enabling it to identify patterns and correlations that signal potential threats from space."
                },
                {
                    title: "Technologies",
                    text: "Python, Django, ML libraries such as Pandas, Scikit-learn, Matplotlib, etc.."
                }
            ],
            title: 'SpaceGuard AI'
        }
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