import React from 'react';
import Content from './Content';

const ExpandableSection = ({ section, sectionId, contents, href = '', image = '', video = '' }) => {

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
                        {image && <img src={image} alt="project-img" className="my-3 img-fluid" />}
                        {video &&
                            <div className="w-100 d-flex justify-content-center align-items-center p-3">
                                <div className="w-75">
                                    <video
                                        src={video}
                                        controls
                                        className='w-100'
                                    ></video>
                                </div>
                            </div>
                        }
                        {
                            contents.map(({ title, text }, index) => (
                                <div key={index}>
                                    <Content title={title} text={text} />
                                </div>
                            ))
                        }
                        {
                            href && <p>
                                <a href={href} className="link-underline link-opacity-50-hover link-underline-opacity-0" target="_blank" rel="noreferrer">
                                    {`Open Project `}
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            </p>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ExpandableSection;