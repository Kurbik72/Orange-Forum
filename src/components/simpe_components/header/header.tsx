import header from './header.module.css'
import logo  from '../../../assets/icons/Logo.png';
import messages from '../../../assets/icons/Message.png';
import notifications from   '../../../assets/icons/Notification.png';
import Input from '../../ui/input';
import { Link } from 'react-router-dom';
import Profile from '../../ui/profile/profile';

const Header = () => {
    return (
        <div className={header.header}>
            <div className={header.leftSite}>
                <div className={header.logo}>
                <img src={logo} alt="logo" />
                </div>
                <p className={header.title}>Orange Forum</p>
            </div>
            <div className={header.rightSite}>
                <div className={header.search}>
                <Input placeholder='Type here to search...' />
                </div>
                <div className={header.Uipanel}>
                <a href=""><img src={messages} alt="icon" /></a>
                <a href=""><img src={notifications} alt="notifications icon" /></a>
            </div>
            <div className={header.profile}>
                <Profile src = {''} alt = {''} />
            <div className={header.name}><Link to = {'/login'}>Sign in</Link></div>
            </div>
            
            </div>
        </div>
    )
}

export default Header;