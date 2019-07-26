import React, { Component } from 'react';
import callApi from '../../../utils/apiCaller';
import './styles.scss';

class Infomation extends Component{

    constructor(props){
        super(props);
        this.state = {
            txtDisName : '',
            txtEmail : '',
            txtPass : '',
            txtInfo : '',
            txtPhone : '',
            txtConfirm : ''
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }


    onSave = (e) =>{
        e.preventDefault();
        var { txtDisName, txtEmail, txtPass, txtInfo, txtPhone } = this.state;
        callApi('get_profile ', 'GET', null).then(res => {
            console.log(res);
        })
    }

    render(){
        var { txtDisName, txtEmail, txtPass, txtInfo, txtPhone, txtConfirm } = this.state;
        return(
            <div className="form-info">
                <div className="col-sm-6" id="colums">
                    <from className="info" onSubmit = {this.onSave}>
                        <p>Display Name</p>
                        <input type="text" name="txtDisName" value={txtDisName} onChange = {this.onChange}/>
                        <p>Email</p>
                        <input type="text" name = "txtEmail" value = {txtEmail} onChange = {this.onChange}/>
                        <p>New Password</p>
                        <input type="password" name = "txtPass" value = {txtPass} onChange = {this.onChange}/>
                    </from>
                </div>

                <div className="col-sm-6" id="colums" >
                    <from className="info" onSubmit = {this.onSave}>
                        <p>Display Info</p>
                        <input type="text" name = "txtInfo" value = {txtInfo} onChange = {this.onChange}/>
                        <p>Phone Number</p>
                        <input type="text" name = "txtPhone" value = {txtPhone} onChange = {this.onChange}/>
                        <p>Confirm Password</p>
                        <input type="password" name = "txtConfirm" value = {txtConfirm} onChange = {this.onChange}/>
                    </from>
                </div>
                <div>
                    <button id="change-info" type="submit">UPDATE PROFILE</button>
                </div>
            </div>
        );
    }
}

export default Infomation;