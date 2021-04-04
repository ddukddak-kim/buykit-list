import React from 'react';
import BuyTem from "./BuyTem";
import './ButkitList.scss';

const ButkitList = ({ data }) => {
    return (
        <div className="list">
            {data.map( row => <BuyTem data={ row } key={ row.id } />)}
        </div>
    );
};

export default ButkitList;