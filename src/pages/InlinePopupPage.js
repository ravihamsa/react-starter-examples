/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, InlinePopup, InlineButton, InlineBody} from 'react-starter-components';

export default class InlinePopupPage extends SmartWrapper {

    showPopup(e){
        e.preventDefault();
        this.myPopup.props.togglePopup();
    }

    render(){
        return <div className="popup-page">
            <InlinePopup>
                <InlineButton>
                    <div>click me</div>
                </InlineButton>
                <InlineBody  ref={popup=>this.myPopup=popup} className="ravi-special">
                    <div style={{backgroundColor:'#fff'}}>This is the popup body</div>
                </InlineBody>
            </InlinePopup>

        </div>
    }
}
