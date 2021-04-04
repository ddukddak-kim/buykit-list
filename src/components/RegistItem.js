import React from 'react';
import { MdAdd, MdAddShoppingCart } from 'react-icons/md'
import './RegistItem.scss';

const RegistItem = () => {
    return (
        <form className="regist-insert-form">
            <input
                type="text"
                placeholder="사고 싶은 물건을 입력하세요 :0 💰"/>
            <button type="submit"><MdAddShoppingCart /></button>
        </form>
    );
};

export default RegistItem;