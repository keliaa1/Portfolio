import React from 'react'
import { mySocials } from '../constants'

const Footer = () => {
  return (
    <section className="flex justify-between items-center gap-3 pb-3 text-sm text-neutral-400 c-space">
  <div className="flex gap-2">
    <p>Terms & Conditions</p>
    <p>|</p>
    <p>Privacy Policy</p>
  </div>

  <div className="flex gap-3">
    {mySocials.map((mySocial, index) => (
      <a href={mySocial.href} key={index} target="_blank" rel="noreferrer">
        <img
          src={mySocial.icon}
          className="w-6 h-6 opacity-70 hover:opacity-100 transition"
          alt={mySocial.name}
        />
      </a>
    ))}
  </div>

  <p>&copy; 2025 Kelia. All rights reserved.</p>
</section>

  )
}

export default Footer
