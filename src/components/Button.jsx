import React from 'react'

export default function Button({onClick, children}) {
  return (
    <button className='bg-transparent border border-solid border-black text-black rounded-xl p-1 pr-2 pl-2' onClick={onClick}>
        {children}
    </button>
  )
}
