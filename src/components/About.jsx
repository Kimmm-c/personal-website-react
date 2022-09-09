import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-purple-800 to bg-gray-900 text-white pt-10'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam vitae dicta ipsam dignissimos aspernatur assumenda, obcaecati, maiores doloribus magnam voluptatibus. Atque tempora ducimus iusto a fuga exercitationem, hic quis.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, deleniti sed cum fugit dignissimos ex labore eveniet suscipit ea ducimus, minus quis nesciunt. Voluptas cumque, aspernatur labore nulla vel illo.
                </p>
            </div>
        </div>
    )
}

export default About