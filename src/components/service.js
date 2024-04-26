import React from 'react';
import Button from './button.js';
import List from './list.js';
import ProfilePicture from './profilePic.js';
import State from './state.js';
function Service(){
     const fruits = [
    {id: 1 , name: "apple" , calories: 95},
    {id: 2 , name: "banana" , calories: 195},
    {id: 3 , name: "grape" , calories: 105},
    {id: 4 , name: "orange" , calories: 45},
    {id: 5 , name: "pineapple" , calories: 65},
  ];
  const vegetables = [
    {id: 1 , name: "potato" , calories: 95},
    {id: 2 , name: "carrot" , calories: 195},
    {id: 3 , name: "onion" , calories: 105},
    {id: 4 , name: "tomato" , calories: 45},
    {id: 5 ,  name: "onion" , calories: 105},
  ];
    return(
        <>
        <h1>Service</h1>

        <div className='flex'>
            <List items={fruits} category="Fruits"/>
            <List items={vegetables} category="Vegetables"/>
        </div>
        <Button />
        <ProfilePicture />
        <State/>
        </>

    );
}
export default Service;