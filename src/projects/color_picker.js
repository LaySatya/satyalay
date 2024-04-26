import { useState } from "react";

function ColorPicker(){
    const [color , setColor] = useState("red");
    const updateColor = (e) => {
        setColor(e.target.value);
    }
    return(
        <>
            <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
                <h1 className='text-[45px] font-medium text-center'>Color Picker</h1>  
                <div className="w-72 mt-8 h-44 rounded-lg shadow-md mx-auto flex justify-center items-center border-slate-600 border-spacing-4" style={{backgroundColor: color}}>    
                    <p className="text-center text-2xl m-5 text-white">You selected color: {color}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-center text-lg m-5">Please select a color: </p>
                    <input type="color" value={color} onChange={updateColor}/>
                </div>
            </div>
        </>
    );
}
export default ColorPicker;