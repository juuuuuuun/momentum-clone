import React, { useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Momentum() {

    const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div className='flex flex-col justify-between absolute w-[100%] h-[100%] p-[5%]'>
        <Header  isLogIn={isLogIn} />
        <Body setState={setIsLogIn} isLogIn={isLogIn} />
        <Footer isLogIn={isLogIn} />
    </div>
  )
}
