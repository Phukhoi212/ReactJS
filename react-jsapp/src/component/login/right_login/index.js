import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginRequest } from '../../../actions';
import { connect } from 'react-redux';
import './styles.scss';


class Right_Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPass: '',
            isLogin: false,
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        var { txtEmail, txtPass } = this.state;
        this.props.Login(txtEmail, txtPass);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLogin: nextProps.tasks.isLogin
        })
    }


    render() {
        var { txtEmail, txtPass, isLogin } = this.state;
        if (isLogin) {
            alert("Login Success!!!");
            return <Redirect to='/info' />
        }

        return (
            <div className="login_form">
                <form className="login" onSubmit={this.onLogin}>
                    <p id="login-text">LOGIN</p>
                    <div className="input">
                        <p>Email:</p>
                        <input type="email" name="txtEmail" value={txtEmail} onChange={this.onChange} />
                        <p>Password:</p>
                        <input type="password" name="txtPass" value={txtPass} onChange={this.onChange} />
                        <div id="button-event">
                            <button id="btn-login" type="submit" name="btn-login" >LOGIN</button>
                            <Link to='/signup'><button id="btn-signup" type="submit" >SIGN UP</button></Link>
                            {/* <button className="btn btn-success btn-xs"><i className="fa fa-refresh fa-spin"></i> Loading</button>  */}
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
        Login: (email, password) => {
            dispatch(loginRequest(email, password));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Right_Login);