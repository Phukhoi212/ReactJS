import React, { Component } from 'react';
import Left_Login from '../../component/login/left_login/index';
import Right_Login from '../../component/login/right_login/index';
import './styles.scss';

class Login extends Component{
  render(){
    return(
      <div id="page-login">
        <div className="body-content">
          <div className="col-sm-6" id="left">
            <Left_Login />
          </div>
          <div className="col-sm-6 right">
            <Right_Login />
          </div>
        </div>
        <div id="footer">
          <p>&copy; 2019 Terralogic, Inc</p>
        </div>
      </div>
      
    );
      
  }
}

export default Login;
