import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import { connect } from 'react-redux';
import { signupRequest } from '../../actions';

class Right_SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPass: '',
            txtPassConfirm: '',
            isSignUp:false,
            token: ''
        };
    }

    onChange = (e) =>{
        var target= e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSignUp = (e) =>{
        e.preventDefault();
        var {txtEmail, txtPass, txtPassConfirm} = this.state;
        if(txtPass === txtPassConfirm){
            this.props.onSignup(txtEmail,txtPass);
        }
        else{
            alert("Confirm password does not match!!!!");
        }
 
    }

    componentWillReceiveProps(nextProps) {
    	this.setState({
            isSignUp: nextProps.tasks.isSignUp	
    	})
    }

    render() {
        var{ txtEmail, txtPass, txtPassConfirm, isSignUp } = this.state;
        if(isSignUp){
            alert("Signup Success!!!");
            return <Redirect to='/login' />
        }
        return (
            <div className="signup_form">
                <form className="signup" onSubmit={this.onSignUp}>
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
                            <Link to='/login'><button id="bt-back" type="submit">BACK</button></Link>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
  };

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSignup: (email, password) => {
            dispatch(signupRequest(email, password));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Right_SignUp);