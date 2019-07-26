import React, { Component } from 'react';
import './styles.scss';


class Avatar extends Component{
    render(){
        return(
            <div className="avatar-img">
                <div>
                    <img id="images" alt="" src="https://www.shareicon.net/download/2015/10/03/110923_man_512x512.png"/>
                </div>
                <div id="change-icon">
                   <a href="0" ><img id="change-ava" alt="" src="https://www.materialui.co/materialIcons/image/edit_grey_192x192.png" /></a>
                </div>
            </div>
        );
    }
}

export default Avatar;