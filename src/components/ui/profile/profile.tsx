
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../ui/profile/avatar.module.css';
import { Link } from 'react-router-dom';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';






export default function profile({src, alt,username}:{src?:string, alt?:string,username?:string}) {

    const user = useSelector(getUserAuthData);

return (
    <div className={avatar.border}>
    <div className={avatar.avatar}  > 

        {user?.avatar ? <img src={user?.avatar} alt={alt} /> : <p>+</p> }
    
</div>
<div className={avatar.name}>
    <Link to = {'/profile'} >{username}</Link>
</div>
</div>
)
}
