import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../../utils/apiCaller';
import './styles.scss';


class Right_Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            txtEmail : '',
            txtPass : '',
        }
    }

    onChange = (e) =>{
        var target= e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) =>{
        e.preventDefault();
        var {txtEmail, txtPass} = this.state;
        callApi('login', 'POST', {
            email: txtEmail,
            password: txtPass,
        }).then(res =>{
            console.log(res);
            if(res.status >= 200 && res.status <400)
            {
                alert("Login Success!!!");
            }
            else
                alert("Login failed!!!!");  
        });
    }



    render(){
        var {txtEmail, txtPass} = this.state;
        return(
                <div className="login_form">
                    <form className="login" onSubmit = {this.onSave}>
                        <p id="login-text">LOGIN</p>
                        <div className="input">
                            <p>Email:</p>
                            <input type="text" name="txtEmail" value = {txtEmail} onChange={this.onChange}/>
                            <p>Password:</p>
                            <input type="password" name="txtPass" value={txtPass} onChange={this.onChange}/>
                            <div id="button-event">
                                <button id="btn-login" type="submit" name="btn-login">LOGIN</button>
                                <Link to='/signup'><button id="btn-signup" type="submit" >SIGN UP</button></Link>
                            </div>
                        </div>
                    
                    </form>
                </div>
        );
    }

}

export default Right_Login;