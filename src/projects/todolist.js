import { useState } from "react";

function ToDoList(){
    const [tasks , setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function newTask(e){
        setNewTasks(e.target.value);
    }
    function handleNewTask(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t , newTasks]);
            setNewTasks("");
        }
        else{
            alert("Input your task.")
        }
    }
    function removeTasks(index){
        const sure = prompt("Are you sure you want to remove?");
        if(sure === "yes" || sure === "Yes" || sure === "YES"){
            setTasks(tasks.filter((_ , i)=> i !== index));
        }
        else{
            alert("Please try again!");
        }
    }
    function upTask(index){
        if(index > 0){
            const updatedTaskUp = [...tasks];

            [updatedTaskUp[index] , updatedTaskUp[index - 1]] = [updatedTaskUp[index - 1] , updatedTaskUp[index]]

            setTasks(updatedTaskUp);
        }
    }
    function downTask(index){
        if(index < tasks.length -1){
            const updatedTaskDown = [...tasks];

            [updatedTaskDown[index] , updatedTaskDown[index + 1]] = [updatedTaskDown[index + 1] , updatedTaskDown[index]]

            setTasks(updatedTaskDown);
        }
    }
    return(
        <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
            <h1 className='text-[45px] font-medium text-center'>To-Do-List</h1>  
            <div className="w-full flex justify-center">
                <input onChange={(e)=> newTask(e)} type="text" className="h-12 p-3 md:w-80  w-64 m-3 outline-none bg-slate-200 rounded-md" placeholder="Enter your task"/>
                <button onClick={handleNewTask} className="rounded-md p-3 bg-green-400 text-white m-3 w-36">Add task ➕</button>
            </div>
            <div>
                <div className="bg-blue-300 rounded-lg md:w-6/12 w-11/12 h-96 overflow-hidden hover:overflow-auto shadow-md mx-auto">
                    <h2 className="text-center mt-5 text-3xl font-medium  mb-8 text-white">Lists</h2>
                    {
                        tasks.length === 0 ? (<h3 className="text-center text-[30px] text-white mt-20">Oop!🤗 no tasks yet, please add your tasks.</h3> )
                        : (
                            tasks.map((task, index) => (
                                <div key={index} className="w-11/12 bg-slate-100 rounded-lg mx-auto mt-2 p-2 flex justify-between">
                                    <div className="hover:overflow-auto overflow-hidden w-5/12">
                                        <p className="text-2xl font-medium translate-x-5">{task}</p>
                                    </div>
                                    <div>
                                        <button onClick={()=> removeTasks(index)} className="p-2 py-1 mr-1 text-white bg-red-600 rounded-md"><ion-icon name="trash-outline"></ion-icon></button>
                                        <button onClick={()=> upTask(index)} className="p-2 py-1 mr-1 text-white bg-blue-500 rounded-md">👆</button>
                                        <button  onClick={()=> downTask(index)} className="p-2 py-1 text-white bg-blue-500 rounded-md">👇</button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
}
export default ToDoList;