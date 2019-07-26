import React, { Component } from 'react';
import User from '../../component/user/users';
import UsersList from '../../component/user/users-list';
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';

class UserPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            users : []
        };
    }

    componentDidMount(){
        callApi('login','POST', {email: 'user@terralogic.com', password: '123456'}).then(res => {
            console.log(res);
            this.setState({

            });
        });
    }

    

    render(){
        var {users} = this.state;


        return(
            <div className="user-page">
                <div>
                {this.props.children}
                </div>
                <UsersList>
                    {this.showUsers(users)}
                </UsersList>
            </div>
        );
    }

    showUsers(users){
        var result = null;
        if(users.length > 0){
            result = users.map((user, index) =>{
                return(
                    <User 
                        key = {index}
                        user = {user}
                        index = {index}
                    />

                );

            });
        }
        return result;
    }
}

const mapStateToProps = state =>{
    return{
        users : state.users
    }
}

export default connect(mapStateToProps) (UserPage);