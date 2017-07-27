/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper} from 'react-starter-components';

export default class LoaderAnimation extends SmartWrapper {

    showLoading(e){
        e.preventDefault();
        this.loadingPlaceHolder.bumpAndCheckLoading(1)
    }


    hideLoading(e){
        e.preventDefault();
        this.loadingPlaceHolder.bumpAndCheckLoading(-1)
    }

    render(){
        return <div className="loader-animation">
            <h1>
                Here comes the loader
            </h1>

            <SmartWrapper ref={wrapper=>this.loadingPlaceHolder=wrapper}>
                    <div>Content</div>
            </SmartWrapper>


            <button onClick={this.showLoading.bind(this)}>Show Loading</button>
            <button onClick={this.hideLoading.bind(this)}>Hide Loading</button>

        </div>
    }
}
