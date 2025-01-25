import React from 'react'
import btnStyles from '../button/button.module.css';

interface CreateBtnProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onChange?: () => void;  
    className?: string;
    disabled?: boolean;
}
const button:React.FC<CreateBtnProps> = ({ ...props}) => {
return (
    <div className={btnStyles.button}>
        <button {...props}>Create Post</button>
    </div>
)
}

export default button;


