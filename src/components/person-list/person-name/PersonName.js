import React, { useState } from "react";
import '../person-name/PersonName.css';

const PersonName = (props) => {
    const [name, setName] = useState(props.name);
    const changeName = () => {
        setName('updated');
    }

    return (
        <div className="person__wrapper">
            <div className="person__name">{name}</div>
            <button onClick={changeName}>Change name</button>
        </div>
    );


}

export default PersonName;