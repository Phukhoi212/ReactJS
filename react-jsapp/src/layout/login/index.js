import React, { Component } from 'react';
import Left_Login from '../../component/login/left_login/index';
import Right_Login from '../../component/login/right_login/index';
import './styles.scss';

class Login extends Component{
  render(){
    return(
      <div id="container-fruid">
        <div className="row">
          <div className="col-sm-6" id="left">
            <Left_Login />
          </div>
          <div className="col-sm-6" id="right">
            <Right_Login />
          </div>
        </div>
      </div>
      
    );
      
  }
}

export default Login;
