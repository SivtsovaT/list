import React from "react";
import '../form/NewPerson.css';
import NewPersonForm from "./NewPersonForm";


const NewPerson = (props) => {
    const savePersonDataHandler = (enteredPersonData) => {
        const personData = {
            ...enteredPersonData,
            id: Math.random().toString()
        };
        props.onAddPerson(personData);
    };

    return (
        <div className='new-expense'>
            <NewPersonForm onSavePersonData={savePersonDataHandler} />
        </div>
    );
};

export default NewPerson;