import React from 'react'
import avatar from '../../ui/profile/avatar.module.css';
export default function profile({src, alt}:{src:string, alt:string}) {
return (
    <div className={avatar.border}>
    <div className={avatar.avatar} > 
    <a href="#">+</a>
    <img src={src} alt={alt}  />
</div>
</div>
)
}
