import React from 'react';
import './App.css';
import Person from "./components/person-list/person";
import PersonItem from "./components/person-list/person-list-item/PersonItem";
import NewPerson from "./components/form/NewPerson";

const App = () => {
    const friend = [
        {
            id: 'f1',
            date: new Date(1972, 0, 1),
            name: 'Eduard',
            age: 50
        },

        {
            id: 'f2',
            date: new Date(1985, 2, 19),
            name: 'Tania',
            age: 37
        },

        {
            id: 'f3',
            date: new Date(2008, 4, 4),
            name: 'Natasha',
            age: 13
        },


    ];
    const addPersonHandler = friend => {
        console.log('In App.js');
        console.log(friend);
    };


    return (
        <div>
            <NewPerson onAddPerson={addPersonHandler} />
            <PersonItem items={friend} />
        </div>
    );
}

export default App;
