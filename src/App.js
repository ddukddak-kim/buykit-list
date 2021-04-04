import React from 'react';
import RegistItem from "./components/RegistItem";
import Main from "./components/Main";
import ButkitList from "./components/ButkitList";

const App = () => {
    return (
        <Main>
            <RegistItem/>
            <ButkitList />
        </Main>
    );
};

export default App;