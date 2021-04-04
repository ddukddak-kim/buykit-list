import React, { useState } from 'react';

const Say = () => {
    const [form, setForm] = useState({
        name: '',
        age: ''
    });

    const { name, age } = form;

    const onClick = e => {
        alert(name + "/" + age);
        setForm({
            name: "",
            age: ""
        });
    }

    const onKeyPress = e => {
        if(e.key === "Enter") onClick();
    }

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <input type="text"
                   name="name"
                   value={name}
                   onKeyPress={onKeyPress}
                   onChange={onChange}/>
            <input type="text"
                   name="age"
                   value={age}
                   onKeyPress={onKeyPress}
                   onChange={onChange}/>
            <button onClick={onClick}>btn1</button>
        </div>
    );
};

export default Say;