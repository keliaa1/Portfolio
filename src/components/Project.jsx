import { span } from 'motion/react-client'
import React from 'react'
import ProjectDetails from './ProjectDetails'

const Project = ({title, description, subDescription, href, image, tags}) => {
  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'>
        <div>
      <h2 className='text-4xl'>{title}</h2>
      <div className='flex gap-5 text-sand mt-2'>
       {tags.map((tag)=>(
        <span key={tag.id}>{tag.name}</span>
       ))}
      </div>
      </div>
      <button className='flex items-center gap-1 cursor-pointer hover-animation'>
        Read more
        <img src="public/logos/right-arrow.svg" alt="" className='w-5' />
      </button>
      
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />
    <ProjectDetails title={title} description={description} subDescription={subDescription} href={href} image={image} />
    </>
  )
}

export default Project
