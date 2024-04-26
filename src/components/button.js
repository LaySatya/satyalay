import React from 'react';

function Button(){
    const handleClickedWithParameter = (e) => {
        e.target.textContent = "OUCH!!😒";
    }    
    return(
        <button onClick={(e)=> handleClickedWithParameter(e)} className='p-2 px-4 bg-green-400 text-white rounded-lg mt-5 m-5'>Click me 😎</button>
    );
}
export default Button;