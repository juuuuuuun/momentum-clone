import React, { useState } from 'react'
import Button from './Button';

export default function Body({setState, isLogIn}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [isNameSubmit, setIsNameSubmit] = useState(false);
    const [isEmailSubmit, setIsEmailSubmit] = useState(false);
    const [isPwSubmit, setIsPwSubmit] = useState(false);
    const [inputGuide, setInputGuide] = useState("Hello, what's your name?");

    const valueTyped = (e) => {
        e.preventDefault();
        if(!isNameSubmit){
            setName(e.target.value);
            console.log(e.target.value);
        }else if(isNameSubmit && !isEmailSubmit){
            setEmail(e.target.value);
            console.log(e.target.value);
        }else {
            setPw(e.target.value);
            console.log(e.target.value);
        }
        console.log("name", isNameSubmit);
        console.log("email", isEmailSubmit);
    }

    const submitValue = (e) => {
        e.preventDefault();
        console.log(name, e)
        if(!isNameSubmit && name !== ""){
            console.log("Submitted", name);
            setName("");
            setIsNameSubmit(!isNameSubmit);
            setInputGuide(`What's your email, ${name}?`);
        }else if(isNameSubmit && !isEmailSubmit){
            console.log("Email");
            setEmail("");
            setInputGuide("Please choose a password.");
            setIsEmailSubmit(!isEmailSubmit);
        }else {
            console.log("Logged in");
            setPw("");
            setState(!isLogIn);
        }
    }

  return (
    <div>
        {console.log(isLogIn)}
        {isLogIn ? 
        <></>
        :
        <form className='flex justify-center items-center flex-col'>
        <div className='text-4xl'>{inputGuide}</div>
        {isNameSubmit ?
            <></> :
            <input className='text-4xl font-bold border-b-2 border-black w-[70%] m-5' type='text' value={name} onChange={valueTyped} required />
        }
        {!isEmailSubmit && isNameSubmit ?
            <input className='text-4xl font-bold border-b-2 border-black w-[70%] m-5' type='email' value={email} onChange={valueTyped} /> :
            <></>
        }
        {!isPwSubmit && isEmailSubmit && isNameSubmit ?
            <input className='text-4xl font-bold border-b-2 border-black w-[70%] m-5' type='password' value={pw} onChange={valueTyped} /> :
            <></>

        }
        {name === "" ? 
        <></> : 
        <Button onClick={submitValue}>Continue</Button>
        }
        {!isNameSubmit ? 
        <></> :
        <ul className='flex'>
            <li className='mr-2'>
                <Button>Change name</Button>
            </li>
            <li>
                <Button onClick={submitValue}>Continue</Button>
            </li>
        </ul>
        }
    </form>
        }
        
    </div>
  )
}
