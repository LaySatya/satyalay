import { useState } from "react";

function OnChangeForm(){
    const [name , setName] = useState("Guest");
    const [qty , setQty] = useState(0);
    const [comment , setComment] = useState("");
    const [payment , setPayment] = useState("Choose payment");
    const [shipping , setShipping] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateQuatity = (e) => {
        setQty(e.target.value);
    }
    const updateComment = (e) => {
        setComment(e.target.value);
    }
    const updatePayment = (e) =>  {
        setPayment(e.target.value);
    }
    const updateShipping = (e) =>  {
        setShipping(e.target.value);
    }
    return(
        <>
            <div className='mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto'>
                <h1 className='text-[45px] font-medium text-center'>Order App</h1>  
                <div className="lg:flex">
                    <div>
                        <input  onChange={updateName} className="outline-none bg-slate-200 px-5 rounded-lg m-5 p-3 xl:w-[22rem] lg:w-[17rem] w-[90%]" placeholder="Input Name"/>
                        <p className="m-5 text-lg">
                            Name: {name}
                        </p>
                    </div>
                    <div>
                        <input value={qty} onChange={updateQuatity} type="number" className="outline-none bg-slate-200 px-5 rounded-lg m-5 p-3 xl:w-[22rem] lg:w-[17rem] w-[90%]" placeholder="Input Quantity"/>
                        <p className="m-5 text-lg">
                            Quantity: {qty}
                        </p>
                    </div>
                    <div>
                        
                        <select value={payment} onChange={updatePayment} className="outline-none bg-slate-200 px-5 rounded-lg m-5 p-3 xl:w-[22rem] lg:w-[17rem] w-[90%]">
                            <option value="Choose payment">Select an option</option>
                            <option value="ABA">ABA</option>
                            <option value="Paypal">Paypal</option>
                            <option value="Visa">Visa</option>
                        </select>
                        <p className="m-5 text-lg">
                            Payment: {payment}
                        </p>
                    </div>
                </div>
                    <div className="">
                        <label className="text-lg">
                            <input type="radio" value="Pick up" checked={shipping === 'Pick up'} onChange={updateShipping} className="m-5 translate-x-3 cursor-pointer"/> Pick up
                        </label>
                        <label className="text-lg">
                            <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={updateShipping} className="m-5 translate-x-3 cursor-pointer"/> Delivery
                        </label>
                        <p className="ml-5 mt-5 p-2 text-lg">
                            Shipping: {shipping}
                        </p>
                    </div>
                    <textarea value={comment} onChange={updateComment} className="outline-none bg-slate-200 px-5 rounded-lg m-5 p-8 w-[20rem]" placeholder="Write down your comments"/>
                    <p className="m-5 text-lg">
                        Comments: {comment}
                    </p>
            </div>
        </>
    );
}
export default OnChangeForm