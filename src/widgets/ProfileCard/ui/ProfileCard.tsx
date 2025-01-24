import profile from './Profile.module.css';
import { AddAvatar } from '../../../features/addAvatarInProfile/ui/addAvatar';
import { LeaveButton } from './LeaveButton/LeaveButton';
export const ProfileCard = () => {
return (
    <div className={profile.ProfileCard}>
        <div className={profile.ProfileCard__content}>
        <AddAvatar/>

        
        </div>
    
    </div>
)
}


