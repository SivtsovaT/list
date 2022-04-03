import React from "react";
import '../person-list/person.css'
import PersonDate from "./person-date/PersonDate";
import PersonName from "./person-name/PersonName";
import PersonAge from "./person-age/PersonAge";

const Person = (props) => {

    return (
        <div className="person__container">
            <PersonDate date={props.date}></PersonDate>
            <PersonName name={props.name}></PersonName>
            <PersonAge age={props.age}></PersonAge>
        </div>
    )
}

export default Person;