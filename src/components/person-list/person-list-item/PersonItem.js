import React, { useState } from "react";
import '../person-list-item/PersonItem.css';
import Person from "../person";
import Cards from "../cards/cards";
import PersonFilter from "../../filters/PersonFilter";

const PersonItem = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <Cards className="list">
            <PersonFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <Person date={props.items[0].date} name={props.items[0].name} age={props.items[0].age}></Person>
            <Person date={props.items[1].date} name={props.items[1].name} age={props.items[1].age}></Person>
            <Person date={props.items[2].date} name={props.items[2].name} age={props.items[2].age}></Person>
        </Cards>
    )
}

export default PersonItem;