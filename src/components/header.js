import React from 'react'
import "../css/header.css"

function Header ({user}){
    const {name,profile_pic, status} = user;
    return (
        <header className="Header">
             <img src={profile_pic} alt={name} className="user__pic" />
            <h1 className="Header__name">{name}</h1>
            <p className="Header__status">{status}</p>

        </header>
    );

}
export default Header;