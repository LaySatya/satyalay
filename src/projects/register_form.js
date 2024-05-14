import { useState } from "react";

function RegistrationForm(){
    const [field , setField] = useState("");
    const [submited , setSubmited] = useState(false);
    function handleEmptyInput(){
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if(firstname !== "" & lastname !== "" & email !== "" & password !== ""){
            setSubmited(!false);
        }
        else{
            setField("*please fill all required fields!");
        }
    }
    function exitAlert(){
        setSubmited(false);
    }
    return (
        <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
            <h1 className="sm:text-[45px] text-[40px] font-medium text-center">Registration Form</h1>
            {
                submited ? (<div className="bg-green-300 p-3 text-white rounded-md w-10/12 mx-auto">
                                <div className="flex justify-between">
                                    <h3 className="text-md px-2">Register successfully.</h3>
                                    <i onClick={()=>exitAlert()} class="ri-close-large-fill pr-2 cursor-pointer hover:scale-105 transition-all hover:opacity-90"></i>
                                </div> 
                            </div>) : console.error("Please fill all required fields!")
            }
            <div className="flex justify-center">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-8">
                    <div>
                        <label className="text-md">Firstname</label> <br/>
                        <input type="text" id="firstname" className="p-3 sm:w-96 w-80 rounded-md outline-none" placeholder="Firstname"/>
                        <br/><span className="text-red-400">{field}</span>
                    </div>
                    <div>
                        <label className="text-md">Lastname</label> <br/>
                        <input type="text" id="lastname" className="p-3 sm:w-96 w-80 rounded-md outline-none" placeholder="Lastname"/>
                        <br/><span className="text-red-400">{field}</span>
                    </div>
                    <div>
                        <label className="text-md">Email</label> <br/>
                        <input type="text" id="email" className="p-3 sm:w-96 w-80 rounded-md outline-none" placeholder="Email"/>
                        <br/><span className="text-red-400">{field}</span>
                    </div>
                    <div>
                        <label className="text-md">Password</label> <br/>
                        <input type="text" id="password" className="p-3 sm:w-96 w-80 rounded-md outline-none" placeholder="Password"/>
                        <br/><span className="text-red-400">{field}</span>
                    </div>
                    <div>
                        <input onClick={()=>handleEmptyInput()} type="submit" value="Register" className="cursor-pointer hover:scale-105 transition-all bg-blue-400 p-3 w-28 text-white mt-6 rounded-md outline-none"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegistrationForm;