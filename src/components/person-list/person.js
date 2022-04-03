import React from "react";
import '../person-list/person.css'

const Person = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className="person__container">

            <div className="person__wrapper">
                <div>
                    <div>{month}</div>
                    <div>{day}</div>
                    <div>{year}</div>
                </div>
                <div>{props.name}</div>
                <div>{props.age}</div>
            </div>

        </div>
    )
}

export default Person;