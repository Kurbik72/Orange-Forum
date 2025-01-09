import React from 'react'
import inputStyles from '../createInput/input.module.css';
const createdInput = ({value,onChange,onKeyDown}:{value: string, onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void }) => {
return (
    <div className={inputStyles.input}>
    <input 
    type="text" 
    name="" 
    placeholder='Let’s share what going on your mind...'
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    />
    </div>
)
}
export default createdInput;

//value= {(e:React.ChangeEvent<HTMLInputElement>)=> setText(e.target.value)}