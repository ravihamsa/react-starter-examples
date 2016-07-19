/**
 * Created by ravi.hamsa on 7/12/16.
 */
import React, {Component, PropTypes} from "react";
import {core, components} from 'react-starter';
import sessionManager from '../../others/sessionManager';
const {navigate, dataLoader, SmartWrapper, Loader, MessageStack} = core;

const {Form, TextInput, Select} = components.Form;

const {ViewStateManager, ViewState} = components.common;


class Login extends SmartWrapper {

    onSubmitHandler(data) {
        this.addRequest('loginResponse', 'login', data);
        //let def = dataLoader.getRequestDef('login', data);
    }

    changeStateToSpecial(event) {
        event.preventDefault();
        this.setState({viewState: 'special'})
    }

    render() {

        let currentState = 'form';
        if (this.state.loading) {
            currentState = 'loading'
        } else if (this.dataIndex.errors) {
            currentState = 'error'
        } else if (this.dataIndex.loginResponse) {
            delete this.dataIndex.loginResponse;
            dataLoader.addResource('userDetails', {
                type: 'static',
                data: {
                    id: 'ravi',
                    name: 'Admin',
                    email: 'ravi.hamsa@ravi.com'
                },
                responseDelay: 100
            })
            dataLoader.setSessionHeaders(this.dataIndex.loginResponse);
            sessionManager.clearUserDetails();
            navigate('table');
            return null;
        }

        return <ViewStateManager currentState={currentState}>

            <ViewState stateNames="form,error">
                <Form onSubmitHandler={this.onSubmitHandler.bind(this)}>
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Login</h1>
                            <TextInput name="username" placehodler="User Name" label="User Name"/>
                            <TextInput name="password" type="password" placeholder="Password" label="Password"/>
                            <button className="btn btn-default">Login</button>
                        </div>
                    </div>
                </Form>
            </ViewState>

            <ViewState stateNames="loading">
                this is loading state
            </ViewState>
            <ViewState stateNames="error">
                <MessageStack messages={this.dataIndex.errors}/>
            </ViewState>

        </ViewStateManager>

        if (this.state.active) {
            if (this.state.loading) {
                return <Loader/>
            } else if (this.dataIndex.errors && this.props.showError !== false) {
                return <MessageStack messages={this.dataIndex.errors}/>
            } else if (this.dataIndex.loginResponse) {

            } else {
                return <div>
                    <Form onSubmitHandler={this.onSubmitHandler.bind(this)}>
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Login</h1>
                                <TextInput name="username" placehodler="User Name" label="User Name"/>
                                <TextInput name="password" type="password" placeholder="Password" label="Password"/>
                                <button className="btn btn-default">Login</button>
                            </div>
                        </div>
                    </Form>

                </div>
            }
        } else {
            return <div>asdfa</div>;
        }
    }
}

export default Login;