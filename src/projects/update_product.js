import { useState } from "react";

function UpdateProduct() {
    const [products, setProduct] = useState(["Apple", "Banana", "Orange"]);

    function handleAddProduct() {
        const newProduct = document.getElementById('addP').value;
        document.getElementById('addP').value = "";
        if(newProduct !== ""){
            //  setProduct([newProduct]); When we add this it mean we reset all the old items of array and 
            //                            add only new value that input in the form
                setProduct(p => [...p, newProduct]);
        }
        else{
            alert("Please input product first!");
        }
    }
    function handleRemoveProduct(index){
        // setProduct(products.filter((element, i) => i !== index)); // it works the same below
        const warning = prompt("Are you sure you want to remove?If you want type yes.");
        if(warning === "yes" || warning === "Yes" || warning === "YES"){
            setProduct(products.filter((_, i) => i !== index)); 
        }
        else{
            alert("Please try again!");
        }
        // using _ it means that the parameter that passed to the function it will ignore that parameter 
    }
    function handleUpdateProduct(index){
        const inputUpdateProduct = prompt();
        if(inputUpdateProduct !== ""){
            products[index] = inputUpdateProduct;
            setProduct(p => [...p]);
        }
        else{
            alert("Please input updating product first!");
        }
    }
    return (
        <>
            <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
                <h1 className='text-[45px] font-medium text-center'>CRUD products</h1>
                <div className="md:flex justify-between md:w-9/12">
                    <div className="bg-orange-100 m-5 lg:w-5/12 rounded-lg overflow-auto">
                        <h1 className='text-[20px] font-medium text-center mt-2'>Products</h1>
                        <ul className="m-5">
                            {
                                products.map((product, index) =>

                                    <li key={index} className="text-2xl p-2 cursor-pointer">
                                        {product} 
                                        <i onClick={() => handleRemoveProduct(index)} class="ri-delete-bin-line bg-red-500 text-white rounded-md hover:opacity-80 p-1 ml-5"></i>
                                        <i onClick={() => handleUpdateProduct(index)} class="ri-edit-box-line bg-blue-500 text-white rounded-md hover:opacity-80 p-1 ml-1"></i>
                                    </li>)
                                }
                        </ul>
                    </div>
                    <div className="lg:flex md:w-8/12">
                        <input type="text" id="addP" className="outline-none bg-slate-200 px-5 rounded-lg h-12 p-2 m-5 w-80" placeholder="Input product" />
                        <button type="button" onClick={handleAddProduct} className="h-11 md:mt-5 p-2 md:ml-5 hover:opacity-70 hover:scale-95 transition-all bg-green-400 rounded-md sm:w-32 w-20 text-white ">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateProduct;
