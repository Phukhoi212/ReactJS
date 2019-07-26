import React, { Component } from 'react';


class Users extends Component{
    render(){
        var { user, index } = this.props;
        return(
                <tr>
                    <td>{ index +1}</td>
                    <td>{ user.id}</td>
                    <td>{ user.email}</td>
                    <td>{ user.pass}</td>
                </tr>

        );
    }
}

export default Users;