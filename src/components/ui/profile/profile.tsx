import React from 'react'
import avatar from '../../ui/profile/avatar.module.css';
export default function profile({src, alt,username}:{src:string, alt:string,username?:string}) {
return (
    <div className={avatar.border}>
    <div className={avatar.avatar}  > 
    <a href="#">+</a>
    <img src={src} alt={alt}  />
</div>
<div className={avatar.name}>
    <p>{username}</p>
</div>
</div>
)
}
