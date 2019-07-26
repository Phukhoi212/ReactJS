import React, { Component } from 'react';
import './header.scss';


class Header extends Component{
  render(){
    return(
      <div className="header-content">
          <img className="logo" alt="" src="https://www.terralogic.com/img/terra-logo.png"/>
      </div>
    );
      
  }
}

export default Header;