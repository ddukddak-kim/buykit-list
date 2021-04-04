import React, { useState, useRef, useCallback } from 'react';
import Main from "./components/Main";
import ButkitList from "./components/ButkitList";
import RegistItem from "./components/RegistItem";

const App = () => {
    const [data, setData] = useState([{
        id: 1,
        name: '청포도 젤리',
        checked: true
    }, {
        id: 2,
        name: '고구마',
        checked: false
    }]);

    const nextId = useRef(3);

    const onInsert = useCallback(
        insertName => {
            const insertData = {
                id: nextId.current,
                name: insertName,
                checked: false
            };
            setData(data.concat(insertData));
            nextId.current += 1;
        }
    );

    return (
        <Main>
            <RegistItem onInsert={ onInsert }/>
            <ButkitList data={ data }/>
        </Main>
    );
};

export default App;