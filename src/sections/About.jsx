import React from 'react'

const About = () => {
  return (
    <section className='c-space section-spacing'>
      <h1>About me</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        <div className='flex items-end grid-default-color grid-1'></div>
        <div className='grid-default-color grid-2'></div>
        <div className='grid-black-color grid-3'></div>
        <div className='grid-special-color grid-4'></div>
        <div className='grid-default-color grid-5'></div>
      </div>
    </section>
  )
}

export default About
