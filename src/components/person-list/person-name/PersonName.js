import React from "react";
import '../person-name/PersonName.css';

const PersonName = (props) => {
    return (
        <div className="person__wrapper">
            <div className="person__name">{props.name}</div>

        </div>
    );


}

export default PersonName;