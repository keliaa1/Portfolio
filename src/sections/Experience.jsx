import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences as e } from '../constants'

const Experience = () => {
  return (
    <div className='w-full'>
      <Timeline data={e} />
    </div>
  )
}

export default Experience
