/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, ActiveWrapper} from 'react-starter-components';

export default class ActiveWrapperPage extends SmartWrapper {
    constructor(props) {
        super(props)
        this.state.showDetails = false;
    }

    onClickHandler(e) {
        e.preventDefault();
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
        return <div className="active-wrapper">

            <h1>Info</h1>
            <a href="#" onClick={this.onClickHandler.bind(this)}>Toggle details </a>
            <ActiveWrapper active={this.state.showDetails}>
                <div>
                    <h1>Details</h1>
                    <p>Detail text</p>
                </div>
            </ActiveWrapper>
        </div>
    }
}
