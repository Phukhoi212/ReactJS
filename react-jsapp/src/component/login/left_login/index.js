import React , { Component } from 'react';
import './styles.scss';

class Left_Login extends Component{
    render(){
        return(
            <div className="left_menu">
                <div className="logo_left">
                    <img id="logo" alt="" src="https://www.terralogic.com/img/terra-logo.png"/>
                    <p>We are familly</p>
                </div>
                <div id="copyright">
                    <p>&copy;2019 Terralogic, Inc</p>
                </div>
            </div>
        );
    }
}

export default Left_Login;