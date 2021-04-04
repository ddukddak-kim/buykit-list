import React, { useState, useCallback } from 'react';
import { MdAdd, MdAddShoppingCart } from 'react-icons/md'
import './RegistItem.scss';

const RegistItem = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    });

    const submit = useCallback(
        e => {
            onInsert(value);
            setValue("");

            // submit 이벤트는 브라우저에서 새로고침 발생 -> preventDefault 방지
            e.preventDefault();
        }
    )

    return (
        <form className="regist-insert-form">
            <input
                type="text"
                value={value}
                placeholder="사고 싶은 물건을 입력하세요 :@ "
                onChange={onChange}/>
            <button
                type="submit"
                onClick={submit}>
                <MdAddShoppingCart />
            </button>
        </form>
    );
};

export default RegistItem;