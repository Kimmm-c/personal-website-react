import React from 'react';
import ExpandableSection from '../common/ExpandableSection';
import neo from '../../assets/projects/neo.png'
import fitnesstracker from '../../assets/projects/pose-est.png'

const Projects = () => {
    const projects = [
        {
            src: fitnesstracker,
            href: 'https://github.com/Kimmm-c/fitness-tracker',
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
                projects.map(({ title, src, contents, href }, index) => (
                    <div key={index}>
                        <ExpandableSection section={title} sectionId={`project-${index}`} image={src} contents={contents} href={href}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects;