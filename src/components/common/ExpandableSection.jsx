import React from 'react';
import Content from './Content';

const ExpandableSection = ({ section, sectionId, image, contents, href }) => {

    return (
        <div className="container container-fluid my-3">
            <div className="container text-center">
                <button className="collapse-btn press-start-2p-regular text-uppercase" data-bs-toggle="collapse" data-bs-target={`#${sectionId}`} aria-expanded="false" aria-controls={sectionId}>
                    {section}
                </button>
            </div>
            <div className="my-3">
                {
                    <div className="collapse p-3 rounded bg-light opacity-75 content-container" id={sectionId}>
                        <img src={image} alt="project-img" className="my-3 img-fluid" />
                        {
                            contents.map(({ title, text }, index) => (
                                <div key={index}>
                                    <Content title={title} text={text} />
                                </div>
                            ))
                        }
                        <p>
                            <a href={href} className="link-underline link-opacity-50-hover link-underline-opacity-0" target="_blank" rel="noreferrer">
                                {`Open Project `}
                                <i className="bi bi-box-arrow-up-right"></i>
                            </a>
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ExpandableSection;