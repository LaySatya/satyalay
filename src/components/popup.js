import React, { useState } from 'react';

const Modal = ({ isOpen, onClose , addCar }) => {
  const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';
//   const modalBgClasses = isOpen ? 'absolute inset-0 bg-gray-500 opacity-75' : '';
const [newCar, setNewCar] = useState({
    // name: "",
    // model: "",
    // year: "",
    // price: "",
    // img: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the newCar object to the addCar function
    addCar(newCar);
  };
  
  return (
    // <div className='h-screen blur-md'>
        <div className={modalClasses}>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                {/* Modal content */}
                <div className="modal-content py-4 text-left px-6">
                {/* Modal header */}
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Add new car</p>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none px-2 hover:bg-gray-100 rounded-md">
                    <span className="text-3xl">&times;</span>
                    </button>
                </div>
                {/* Modal body */}
                <form onSubmit={handleSubmit}>
                <div className='w-full mt-5'>
                    <div className='flex justify-between'>   
                        <label className='text-md'>Name: </label>
                        <input id='name' onChange={handleInputChange} value={newCar.name} type="text" className='w-10/12 ml-3 px-5 bg-gray-100 rounded-md mx-auto outline-none p-2' placeholder='Input name'/>
                    </div>
                    <div className='mt-5 flex'>
                        <label className='text-md'>Model: </label>
                        <input id='model' onChange={handleInputChange} value={newCar.model} type="text" className='w-10/12 ml-2 px-5 bg-gray-100 rounded-md mx-auto outline-none p-2' placeholder='Input model'/>
                    </div>
                    <div className='mt-5 flex'>
                        <label className='text-md'>Year: </label>
                        <input id='year' onChange={handleInputChange} value={newCar.year} type="text" className='ml-6 w-10/12 px-5 bg-gray-100 rounded-md mx-auto outline-none p-2' placeholder='Input year'/>
                    </div>
                    <div className='mt-5 flex'>
                        <label className='text-md'>Price: </label>
                        <input id='price' onChange={handleInputChange} value={newCar.price} type="text" className='ml-5 w-10/12 px-5 bg-gray-100 rounded-md mx-auto outline-none p-2' placeholder='Input price'/>
                    </div>
                    <div className='mt-5 flex'>
                        <label className='text-md'>Image: </label>
                        <input id='img' onChange={handleInputChange} value={newCar.img} type="img" className='ml-3 w-10/12 px-5 bg-gray-100 rounded-md mx-auto outline-none p-2' placeholder='Input image url'/>
                    </div>
                    <div>
                        <button type='submit' className="px-3 py-2 float-end m-3 bg-green-500 text-white rounded-md hover:opacity-75 transition-all hover:scale-95 border focus:border-green-400 shadow-lg focus:shadow-green-400">Add now <i class="ri-sticky-note-add-line"></i></button>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </div>
    // </div>
  );
};

export default Modal;
