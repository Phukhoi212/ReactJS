import React, { Component } from 'react';
import Left_Login from '../../component/login/left_login/index';
import Right_SingUp from '../../component/signup/index';
import './styles.scss';

class SingUp extends Component{
  render(){
    return(
          <div id="container-fruid">    
            <div className="signup-content">
              <div id="sig-left" className="col-sm-6">
                <Left_Login />
              </div>
              <div id="sig-right" className="col-sm-6">
                <Right_SingUp />
              </div>
            </div>
            <div id="footer">
              <p>&copy; 2019 Terralogic, Inc</p>
            </div>
          </div>
          
        );
          
      }
    }

export default SingUp;
