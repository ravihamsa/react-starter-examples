/**
 * Created by ravi.hamsa on 7/12/16.
 */
import React, {Component, PropTypes} from "react";
import {core, components} from 'react-starter';
import sessionManager from '../../others/sessionManager';
const {navigate, dataLoader, SmartWrapper, Loader, MessageStack} = core;


class Header extends SmartWrapper {

    signOut(event){
        event.preventDefault();
        this.addRequest('logoutResponse', 'logout')
    }

    render (){
        if(this.dataIndex.logoutResponse){
            delete this.dataIndex.logoutResponse;
            sessionManager.clearUserDetails();
            navigate('login');
        }
        return <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo">
                            <a href="#/login">Some logo</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-right-nav tright">
                            Admin, <a href="#/signout" onClick={this.signOut.bind(this)}>Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    }
}

export default Header;