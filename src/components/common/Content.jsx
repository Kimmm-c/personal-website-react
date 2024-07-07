import React from 'react'

const Content = ({title, text}) => {
    return (
        <div className="content-section">
            <h4 className="">{title}</h4>
            <p className="">{text}</p>
        </div>
    )
}

export default Content;