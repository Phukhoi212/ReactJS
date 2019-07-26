import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './styles.scss';

const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={({ match })=>{
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>
            )
        }}/>
    )

}

class Menu extends Component{
    render(){
        return(
            <div className="menu-container">
                
                <nav className="navbar navbar-default">
                    <img className="logo" alt="" src="https://www.terralogic.com/img/terra-logo.png"/>  
                    <ul className="nav navbar-nav">
                            <MenuLink label= "Home" exact to='/' activeOnlyWhenExact={true}></MenuLink>

                            <MenuLink label= "Login" to='/login' activeOnlyWhenExact={false} ></MenuLink>

                            <MenuLink label= "SignUp" to='/signup' activeOnlyWhenExact={false} ></MenuLink>                        
                    </ul>
                </nav>
            </div>
        );
    }

}

export default Menu;