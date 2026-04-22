import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

            <h1 className='text-2xl sm:text-4xl'>
                About <span className='underline underline-offset-4 duration-100 font-light'>Our Brand</span>
            </h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center mid-items-start md-gap-20'>
                <img src={assets.brand_img} alt="about" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col md-items-start mt-20 text-gray-600'></div>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 ms-20'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>mn. sq. ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, vitae. Consequuntur reiciendis, obcaecati, quam pxrovident omnis officiis recusandae commodi suscipit, sequi iusto quae cum dolore. 
                        <button className='bg-blue-600 text-white px-8 py-2 rounded-full mt-4'>Learn more</button>
                    </div>

                </div>


            </div>
        </div >
    )
}

export default About