import React from 'react';
import {InputTypes} from '../../core/types/inputTypes';

const Input: React.FC<InputTypes> = ({placeholder}) => {
    return (
        <input placeholder={placeholder}/>
    );
};



export default Input;