import React from 'react';
import BuyTem from "./BuyTem";
import './ButkitList.scss';

const ButkitList = () => {
    return (
        <div className="list">
            <BuyTem />
            <BuyTem />
            <BuyTem />
        </div>
    );
};

export default ButkitList;