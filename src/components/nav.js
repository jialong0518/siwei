import React from 'react';
import {NavLink} from 'react-router-dom';
import './components.module.less';



const NavBar = () =>(
<div className={'head_module'}>
    <div>
        <NavLink exact to='/'>Jsdemoa</NavLink> |&nbsp;
        <NavLink to='/Jsdemob'>Jsdemob</NavLink> |&nbsp;
        <NavLink to='/Jsdemoc'>Jsdemoc</NavLink>
    </div>
</div>
)
export default NavBar;
