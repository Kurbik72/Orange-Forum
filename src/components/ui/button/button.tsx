import React from 'react'
import btnStyles from '../button/button.module.css';
const button = ({onClick, onChange}:{onClick: () => void, onChange: () => void}) => {
return (
    <div className={btnStyles.button}>
        <button onClick = {onClick} onChange = {onChange}>Create Post</button>
    </div>
)
}

export default button;