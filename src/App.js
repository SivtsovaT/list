import React from 'react';
import './App.css';
import Person from "./components/person-list/person";

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
            <Person date={friend[0].date} name={friend[0].name} age={friend[0].age}></Person>
            <Person date={friend[1].date} name={friend[1].name} age={friend[1].age}></Person>
            <Person date={friend[2].date} name={friend[2].name} age={friend[2].age}></Person>
        </div>
    );
}

export default App;
