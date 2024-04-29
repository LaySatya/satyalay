import propTypes from 'prop-types';
import React from 'react';
import ColorPicker from '../projects/color_picker';
import CounterProgram from '../projects/counter_program';
import DarkMode from '../projects/darkmode';
import OnChangeForm from '../projects/onchange_form';
import CarCRUD from '../projects/real_crud';
import SearchFilter from '../projects/search_filter';
import TemperatureControl from '../projects/temperature';
import ToDoList from '../projects/todolist';
import UpdateState from '../projects/update_obj';
import UpdateProduct from '../projects/update_product';
function Home(props){
    const loggedIn = <h2 className='bg-green-400 rounded-md p-3 w-auto text-white'>
                        Welcome {props.username}
                    </h2>
    const loginRequired =   <h2 className='bg-red-500 rounded-md p-3 w-auto text-white'>
                                Please login first to continue
                            </h2>
    return(
        
        <>
            {props.isLoggedIn ? loggedIn : loginRequired}
            <div className='w-full'>
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project1</h1>    
                <CounterProgram />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project2</h1>
                <OnChangeForm />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project3</h1>
                <ColorPicker />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project4</h1>
                <UpdateState />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project5</h1>
                <UpdateProduct />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project6</h1>
                <CarCRUD />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project7</h1>
                <ToDoList />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project8</h1>
                <DarkMode />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project9</h1>
                <TemperatureControl />
                <h1 className='mt-8 md:ml-4 translate-x-5 p-2 text-white w-24 bg-slate-400 border-r-8 rounded-sm'>Project10</h1>
                <SearchFilter />
            </div>
        </>
    );
}
Home.propTypes = 
{
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
Home.defaultProps = {
    isLoggedIn: false,
    username: 'Guest!',
}
export default Home;

