import { button } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'

const CopyEmailButton = () => {
    const[Copied, isCopied] = useState(false);
    const email = "simbikelia@gmail.com"
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },2000)
    }
  return (
    <button onClick={copyToClipboard} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
        <p className='flex items-center justify-center gap-2'>
            <img src="public/icons/copy.svg" className='w-5' alt="copy icon" />
            Copy email address
        </p>

    </button>
  )
}

export default CopyEmailButton
