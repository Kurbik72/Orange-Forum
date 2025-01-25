import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAvatarThunk } from '../model/services/deleteAvatarThunk';
import { userActions } from '../../../entities/User';
import { AppDispatch } from '../../../app/providers/StoreProvider/config/store';

interface DeleteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}



export const DeleteButton = ({...props}) => {

const dispatch:AppDispatch = useDispatch();

const onDeleteButtonClick = useCallback(async () => {
    await dispatch(deleteAvatarThunk()).unwrap();
},[dispatch]);

return (
    <div>
    <button 
    {...props}
    onClick={onDeleteButtonClick}
    >Delete avatar</button>
    </div>
)
}


