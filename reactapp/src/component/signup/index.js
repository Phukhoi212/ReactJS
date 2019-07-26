import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import './styles.scss';

class Right_SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPass: '',
            txtPassConfirm: ''
        };
    }

    onChange = (e) =>{
        var target= e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onSave = (e) =>{
        e.preventDefault();
        var {txtEmail, txtPass, txtPassConfirm} = this.state;
        if(txtPass === txtPassConfirm){
            callApi('sign_up', 'POST', {
                email: txtEmail,
                password: txtPass,        
            }).then(res =>{
                console.log(res);
            })
        }
    }

    render() {
        var{ txtEmail, txtPass, txtPassConfirm } = this.state;
        return (
            <div className="signup_form">
                <form className="signup" onSubmit={this.onSave}>
                    <p id="signup-text">SIGN UP</p>
                    <div className="input">
                        <p className="input-text">Email:</p>
                        <input type="text" name="txtEmail" value={txtEmail} onChange={this.onChange} />
                        <p className="input-text">Password:</p>
                        <input type="password" name="txtPass" value={txtPass} onChange={this.onChange} />
                        <p className="input-text">Confirm Password:</p>
                        <input type="password" name="txtPassConfirm" value={txtPassConfirm}  onChange={this.onChange}/>
                        <div className="btn-gr">
                            <button id="bt-signup" type="submit">SIGN UP</button>
                            <Link to='/home'><button id="bt-back" type="submit">BACK</button></Link>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default Right_SignUp;