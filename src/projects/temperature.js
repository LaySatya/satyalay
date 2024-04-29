import { useState } from "react";

function TemperatureControl(){
    const [temp , setTemp] = useState(10);
    const [tempColor , setTempColor] = useState("bg-blue-300");
    const decrementTemp = () => {
        setTemp(temp - 1);
        handleTemp();
    }
    const incrementTemp = () => {
        setTemp(temp + 1);
        handleTemp();
    }
    const handleTemp = ()=> {
        if(temp > 0 && temp <= 9){
            setTempColor("bg-blue-300")
        }
        else if(temp >= 10 && temp < 30){
            setTempColor("bg-blue-400");
        }
        else if(temp >= 30 && temp <= 50){
            setTempColor("bg-red-400");
        }
        else if(temp > 50){
            setTempColor("bg-red-500");
        }
        else{
            setTempColor("bg-blue-100");
        }
    }
    return(
        <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto text-gray-800">
            <h1 className="text-[45px] font-medium text-center">Temperature App</h1>
            <div className="w-[85%] m-5 bg-blue-500 rounded-lg mx-auto mt-12">
                <div className={`rounded-full w-72 h-72 ${tempColor} flex justify-center items-center mx-auto border border-y-white border-spacing-5`}>
                    <h1 className="text-3xl text-white">{temp}℃</h1>
                </div>  
                <div className="flex justify-center">
                    <div className="flex">
                        <button onClick={() => decrementTemp()} className="hover:scale-105 w-16 h-16 flex justify-center items-center rounded-full border border-solid border-white px-8 m-1 text-white text-xl  bg-gray-400">−</button>
                        <button onClick={() => incrementTemp()} className="hover:scale-105 w-16 h-16 flex justify-center items-center rounded-full border border-solid border-white px-8 m-1 text-white text-xl  bg-gray-400">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TemperatureControl;