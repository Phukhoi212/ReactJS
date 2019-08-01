import React, { Component } from 'react';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/index';
import Avatar from '../../component/info/avatar/index';
import Infomation from '../../component/info/infomation/index';
import { Link, Redirect } from 'react-router-dom';
import { logOutRequest } from '../../actions';
import { connect } from 'react-redux';
import './styles.scss';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogout: false
        }
    }

    onLogout = () => {
        this.props.logoutNow();
        this.setState({
            isLogout:true
        })
    }

    render() {
        var { isLogout } = this.state;
        if(isLogout){
            alert("Logout Success!!! Back Home!!!");
            return <Redirect to = '/' />
        }
        return (
            <div>
                <div className="header">
                    <div className="col-sm-2 menu-info">
                        <p className="text-header" data-toggle="dropdown">
                            PROFILE
            				</p>
                        <ul className="dropdown-menu menu">
                            <li>
                                <Link to="/info">Profile</Link>
                            </li>
                            <li>
                                <a onClick={this.onLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                    <Header />
                </div>

                <div id="body">
                    <div className="body-info">
                        <div className="image">
                            <Avatar />
                        </div>
                        <div className="infomation">
                            <Infomation />
                        </div>

                    </div>
                </div>

                <div className="footer">
                    <Footer />
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        logout: state.logout
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logoutNow: () => {
            dispatch(logOutRequest());
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Info);