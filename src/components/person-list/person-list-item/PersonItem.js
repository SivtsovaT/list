import React from "react";
import '../person-list-item/PersonItem.css';
import Person from "../person";
import Cards from "../cards/cards";

const PersonItem = (props) => {
    return (
        <Cards className="list">
            <Person date={props.items[0].date} name={props.items[0].name} age={props.items[0].age}></Person>
            <Person date={props.items[1].date} name={props.items[1].name} age={props.items[1].age}></Person>
            <Person date={props.items[2].date} name={props.items[2].name} age={props.items[2].age}></Person>
        </Cards>
    )
}

export default PersonItem;