import React from 'react'

const Button = ({ wrapperClass, label, onclick }) => {
    return (
        <div className={wrapperClass}>
            <button className="main-btn w-100 my-2 py-2 font-monospace text-uppercase" onClick={onclick}>{label}</button>
        </div>
    )
}

export default Button