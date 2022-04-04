import React, { useState } from "react";
import '../person-age/PersonAge.css';

const PersonAge = (props) => {
    const [age, setAge] = useState(props.age);
    const changeAge = () => {
        setAge('updated');
    }


    return (
        <div>{age}
            <button onClick={changeAge}>Change age</button>
        </div>

    )
}

export default PersonAge;