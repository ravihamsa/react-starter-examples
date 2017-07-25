/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, Popup, PopupButton, PopupBody} from 'react-starter-components';

export default class PopupPage extends SmartWrapper {

    showPopup(e){
        e.preventDefault();
        this.myPopup.props.togglePopup();
    }

    render(){
        return <div className="popup-page">
            <Popup>
                <PopupBody  ref={popup=>this.myPopup=popup}>
                    <div style={{backgroundColor:'#fff'}}>This is the popup body</div>
                </PopupBody>
            </Popup>
            <button onClick={this.showPopup.bind(this)}>Custom Button</button>
        </div>
    }
}
