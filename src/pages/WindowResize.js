/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, rxutils} from 'react-starter-components';

export default class WindowResize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };

    }

    setWindowSize() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            setWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            setHeight = w.innerHeight || documentElement.clientHeight || body.clientHeight;
        this.setState({width: setWidth, height: setHeight})

    }

    componentWillMount() {
        this.unsubscribeWindowResize = rxutils.windowResize$.debounceTime(300).subscribe(this.setWindowSize.bind(this))
        this.setWindowSize();
    }

    componentWillUnmount(){
        if(this.unsubscribeWindowResize){
            this.unsubscribeWindowResize.unsubscribe();
        }
    }

    render() {
        return <div className="window-resize">
            {this.state.width}---{this.state.height}
        </div>
    }
}
