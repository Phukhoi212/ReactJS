import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './styles.scss';

class Infomation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display_name: '',
            display_info: '',
            phone: '',

        }
        this.onChange = this.onChange.bind(this);
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }


    onUpdate = (e) => {
        e.preventDefault();
        this.props.onUpdateProfile(this.state);
    }

    componentWillMount() {
        this.props.onGetProfile();
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        var { profile } = nextProps;
        this.setState ({
            display_name : profile.display_name,
            display_info : profile.display_info,
            phone : profile.phone
        });
    }

    render() {
        var { display_name, display_info, phone } = this.state;
        return (
            <div className="form-info"  >
                <div className="col-sm-6" id="colums">
                    <form className="info" >
                        <p>Display Name</p>
                        <input type="text" name="display_name" value={display_name} onChange={this.onChange} />
                        <p>Email</p>
                        <input type="text"  onChange={this.onChange} />
                        <p>New Password</p>
                        <input type="password"  onChange={this.onChange} />
                    </form>
                </div>

                <div className="col-sm-6" id="colums" >
                    <form className="info">
                        <p>Display Info</p>
                        <input type="text" name="display_info" value={display_info} onChange={this.onChange} />
                        <p>Phone Number</p>
                        <input type="text" name="phone" value={phone} onChange={this.onChange} />
                        <p>Confirm Password</p>
                        <input type="password"  onChange={this.onChange} />
                    </form>
                </div>
                <div>
                    <button id="change-info" onClick={this.onUpdate} >UPDATE PROFILE</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProfile: () => {
            dispatch(actions.getProfileRequest());
        },

        onUpdateProfile: (state) => {
            dispatch(actions.updateProfileRequest(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Infomation);