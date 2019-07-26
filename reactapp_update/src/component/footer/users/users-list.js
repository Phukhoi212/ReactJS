import React, { Component } from 'react';


class UsersList extends Component {
    render() {
        return (
            <div className="user-list">
                <table>
                    <thread>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Pass</th>
                        </tr>

                    </thread>

                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default UsersList;