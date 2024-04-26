import { useState } from "react";
import Modal from "../components/popup";
function CarCRUD(){
    const [cars, setCars] = useState([
        {
            img: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg",
            year:  "2015",
            name: "Cartoon",
            model: "McQueen",
            price: 10220,
        },
        {
            img: "https://i.ytimg.com/vi/zCPs0j51ZCI/maxresdefault.jpg",
            year:  "2016",
            name: "Cartoon",
            model: "Oggy",
            price: 10220,
        },
        {
            img: "https://i.pinimg.com/564x/dc/0c/0f/dc0c0f38948fc296a604cdc2071779ba.jpg",
            year:  "2010",
            name: "Cartoon",
            model: "Tom",
            price: 1020,
        },
    ])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const addCar = (newCar) => {
        setCars([...cars, newCar]); // Add new car to the existing list of cars
        closeModal(); // Close the modal after adding the new car
      };
    function handleDeleteCar(index){
        const sure = prompt("Are you sure you want to delete?");
        if(sure === "yes" || sure === "Yes" || sure === "YES"){
            setCars(cars.filter((_, i) => i !== index)); 
        }
    }
    function handleUpdateCar(index){
        alert("This function will available soon.")
        //  const newCar = prompt("Updating car");
        //  if(newCar !== ""){
        //     cars[index] = newCar;
        //     setCars(c => [...c]);
        //  }
        //  else{
        //     alert("Please try again!");
        //  }
    }

    return (
        <>
            <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
                <h1 className='text-[45px] font-medium text-center'>CAR CRUD</h1>
                <button onClick={openModal} className="px-3 py-1 float-end mr-8 bg-green-500 text-white rounded-md hover:opacity-75 transition-all hover:scale-95 border focus:border-green-400 shadow-lg focus:shadow-green-400">Add new <i class="ri-sticky-note-add-line"></i></button>
                <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-12 p-8">
                    {
                        cars.map((car , index) => (
                            <div key={index} className="h-auto rounded-md shadow-slate-300 shadow-md bg-white">
                                {/* <i class="ri-more-fill text-2xl text-gray-700 ml-1 cursor-pointer"></i> */}
                                <img src={car.img}
                                    className="rounded-t-lg object-fill h-44 w-full cursor-pointer" 
                                    alt=""/>
                                <div className="flex justify-between">
                                    <p className="text-lg m-3">Model: {car.model}</p>
                                    <p className="text-lg m-3">name: {car.name}</p>
                                </div>
                                <p className="text-lg m-3">Year: {car.year}</p>
                                <div className="flex justify-between">           
                                    <p className="text-lg m-3">Price: {car.price}$</p>
                                    <div className=" m-3">
                                        <button onClick={()=> handleUpdateCar(index)} className="px-3 py-1 bg-lime-500 text-white rounded-md hover:opacity-75 m-1 transition-all hover:scale-95"><i class="ri-edit-box-line"></i></button>
                                        <button onClick={()=> handleDeleteCar(index)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:opacity-75 transition-all hover:scale-95"><i class="ri-delete-bin-6-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
                <Modal isOpen={isModalOpen} onClose={closeModal} addCar={addCar} />

        </>
    );
}
export default CarCRUD;