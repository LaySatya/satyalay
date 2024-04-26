import { useState } from "react";

function UpdateState(){
    const [car , setCar] = useState({year: 2024 , make: "Ford" , model: "Vehicle"});
    const handleYearChange = (e) => {
        setCar(c => ({...c , year: e.target.value}));
    }
    const handleMakeChange = (e) => {
        setCar(c => ({...c , make: e.target.value}));
    }
    const handleModelChange = (e) => {
        setCar(c => ({...c , model: e.target.value}));
    }
    return(
        <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
            <h1 className='text-[45px] font-medium text-center'>Update Car Information</h1>  
           <div className="mx-auto mb-5">
                <h3 className="text-center text-lg">Year: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {car.year}</h3>
                <h3 className="text-center text-lg">Make: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {car.make}</h3>
                <h3 className="text-center text-lg">Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {car.model}</h3>
           </div>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                <input  onChange={handleYearChange} className="outline-none bg-slate-200 px-5 rounded-lg p-3 ml-2 mr-2" placeholder="Input year"/>
                <input  onChange={handleMakeChange} className="outline-none bg-slate-200 px-5 rounded-lg p-3 ml-2 mr-2" placeholder="Input make"/>
                <input  onChange={handleModelChange} className="outline-none bg-slate-200 px-5 rounded-lg p-3 ml-2 mr-2" placeholder="Input model"/>
           </div>
           <br/>
        </div>
    );

}
export default UpdateState;