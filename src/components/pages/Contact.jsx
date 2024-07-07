import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
    const contacts = [
        {
            label: "LinkedIn",
            ref: "https://www.linkedin.com/in/kim-chung-874917110/",
            icon: "bi-linkedin"
        },
        {
            label: "Github",
            ref: "https://github.com/Kimmm-c",
            icon: "bi-github"
        },
        {
            label: "Email",
            ref: "mailto: kchung0802@gmail.com",
            icon: "bi-envelope-at-fill"
        }
    ]
    return (
        <div className="container my-3 p-3 rounded bg-light opacity-75 content-container">
            {
                contacts.map(({ label, ref, icon }, index) => (
                    <div className="social-link-container fs-5 my-3" key={index}>
                        <i className={`bi ${icon} mx-3`}></i>
                        <a href={ref} className="link-offset-2" target="_blank" rel="noopener noreferrer">
                            {`${label}`}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default Contact;