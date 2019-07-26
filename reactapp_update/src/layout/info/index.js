import React, { Component } from 'react';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/index';
import Avatar from '../../component/info/avatar/index';
import Infomation from '../../component/info/infomation/index';
import './styles.scss';

class Info extends Component{
    render(){
        return(
            <div>
                <div className="header">
                <p>PROFILE</p>
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

export default Info;