import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './BuyTem.scss'


const BuyTem = ({ data }) => {
    let { id, name, checked } = data;

    return (
        <div className="buy-tem">
            <div
                className={ checked ? "check-box checked" : "check-box" }>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="name">{ name }</div>
            </div>

            <div className="remove">
                <MdRemoveCircleOutline />
            </div>

        </div>
    );
};

export default BuyTem;