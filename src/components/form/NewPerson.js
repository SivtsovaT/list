import React from "react";
import '../form/NewPerson.css';
import NewPersonForm from "./NewPersonForm";


const NewPerson = () => {
    return (
        <div className="new-expense">
            <NewPersonForm></NewPersonForm>
        </div>
    )
}

export default NewPerson;