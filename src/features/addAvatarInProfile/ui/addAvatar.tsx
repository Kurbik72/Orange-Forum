import Avatar from '../../../components/ui/profile/profile';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { styles } from '../../../widgets/ProfileCard';
import { memo, useCallback, useEffect, useState } from 'react';
import { addAvatarInProfile } from '../model/services/addAvatarInProfile';
import { userActions } from '../../../entities/User';
import { getAvatarInProfile } from '../model/services/getAvatarInProfile';
import { AppDispatch } from '../../../app/providers/StoreProvider/config/store';
import { LeaveButton } from '../../../widgets/ProfileCard/ui/LeaveButton/LeaveButton';
import { DeleteButton } from '../../../features/deleteAvatarInProfile';

export const AddAvatar = memo( () => {

    
    const userData = useSelector(getUserAuthData);
    const dispatch:AppDispatch = useDispatch();

    const { avatar = '', username = '', id = ''} = userData || {};




    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                await dispatch(getAvatarInProfile({ userId: id })).unwrap();
            } catch (error) {
                console.error('Error fetching avatar:', error);
            }
        };
    
        if (id) {
            fetchAvatar();
        }
    }, [id, dispatch]);


    const onAddAvatar = useCallback (async (e: React.ChangeEvent<HTMLInputElement>) =>{
    const file = e.target.files?.[0];
    if (file && id) {
        try{
            const result = await dispatch(addAvatarInProfile({ 
                file, 
                userId: id 
            })).unwrap();


            dispatch(userActions.setAvatar(result));
        }
        catch (error) {
            console.error("Error uploading avatar:", error);
        }
        

        
    }   

    }, [id, dispatch,]);


return (
    <div className={styles.addAvatar}>
    <div className={styles.content}>
        <div className={styles.avatarBlock__column}>
            <div className={styles.avatar}>
    <input
    type="file" 
    id="file-input"
    onChange={onAddAvatar}
    />
    <label htmlFor="file-input">
    <Avatar src={avatar}/>
    </label>
    </div>
    <p>{`@${username}`}</p>
    </div>
    <DeleteButton className={styles.button}/>
    
    </div>
    <div className={styles.rightBlock}>

    <LeaveButton className={styles.Leave__Button__btn}>Exit</LeaveButton>
    </div>
    </div>
)
})
