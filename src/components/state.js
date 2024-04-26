import React, { useState } from 'react';

function State(){
    const [name , setName] = useState("Guest");
    const [age , setAge] = useState(0);
    const updateName = () => {
        setName("Jonh Frith");
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const [isEmployed , setIsEmployed] = useState(false);
    const togglesEmployed = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div className='m-5 flex'>
            <button onClick={updateName} className='p-2 m-5 bg-slate-700 rounded-md w-auto text-white hover:scale-105 transition-all focus:p-3'>Set name</button>
            <p className='m-5'>
                Name: {name}

            </p>
            <button onClick={updateAge} className='p-2 m-5 bg-slate-700 rounded-md w-auto text-white hover:scale-105 transition-all focus:p-3'>Set Age</button>
            <p className='m-5'>
                Age: {age}
            </p>

            <button onClick={togglesEmployed} className='p-2 m-5 bg-slate-700 rounded-md w-auto text-white hover:scale-105 transition-all focus:p-3'>Set employed</button>
            <p className='m-5'>
                Employed: {isEmployed ? "Yes" : "No"}
            </p>
        </div>
    );
}
export default State;