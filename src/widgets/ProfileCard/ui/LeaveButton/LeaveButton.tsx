import React, { ButtonHTMLAttributes, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { getProfileInfo } from '../../../../features/AuthByUserName/model/services/getProfileInfo';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../../entities/User/model/slices/userSlice';

interface LeaveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}



export const LeaveButton = ({children, ...props}:LeaveButtonProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLeaveButtonClick =async () => {
        try {
          // 1. Выход из системы
        await dispatch(userActions.logout());
        
          // 2. Очистка localStorage
        localStorage.removeItem('token');
        
          // 3. Перенаправление
        navigate('/');
        } catch (e) {
        console.error('Logout error:', e);
        }
    };

return (
    <div>
    <button
    {...props}
    onClick={onLeaveButtonClick}>
    {children}
    </button>
    </div>
)
}


