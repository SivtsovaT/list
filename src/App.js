import React from 'react';
import './App.css';
import Person from "./components/person-list/person";
import PersonItem from "./components/person-list/person-list-item/PersonItem";

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
    return (
        <div>
            <h2>This is person list</h2>
            <PersonItem items={friend}></PersonItem>
        </div>
    );
}

export default App;
