import React from 'react';
import "./Main.scss"

const Main = ({ children }) => {
    return (
        <div className="main-template">
            <div className="app-title">BuyKit List</div>
            <div className="content">{ children }</div>
        </div>
    );
};

export default Main;