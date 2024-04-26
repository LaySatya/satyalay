import React, { useState } from 'react';

function CounterProgram(){
    const [count , setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return(
        <>
            <div className='mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto'>
                <h1 className='text-[45px] font-medium text-center'>Counter App</h1>
                <h2 className='text-[60px] text-center mt-5'>{count}</h2>
                <div className='mt-12 w-full flex justify-center'>
                    <div>
                        <button onClick={handleDecrement} className='p-3 m-3 rounded-md text-white bg-red-500' >Decrement −</button>
                        <button onClick={handleReset} className='p-3 m-3 rounded-md text-white bg-gray-500' >Reset </button>
                        <button onClick={handleIncrement} className='p-3 m-3 rounded-md text-white bg-green-500'>Increment +</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CounterProgram;