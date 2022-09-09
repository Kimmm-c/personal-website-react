import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-8 text-xl'>Please submit the form if you have any questions for me.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/98cb25d1-d4fd-4c20-b6c6-c239e0fd641f" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-3'/>
                        <input type="text" name="email" placeholder="Enter your email" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-3'/>
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-3'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact