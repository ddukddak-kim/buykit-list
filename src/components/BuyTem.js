import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './BuyTem.scss'

const BuyTem = () => {
    return (
        <div className="buy-tem">
            <div className="check-box">
                <MdCheckBoxOutlineBlank />
                <div className="product-name">이거 살꼬암</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>

        </div>
    );
};

export default BuyTem;