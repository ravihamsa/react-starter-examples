/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXTextInput} from 'react-starter-components';

export default class Forms extends SmartWrapper {

    valueChange(changed, fullObject) {
        // console.log(changed, fullObject, 'valueChange')
    }

    propChange(prop) {
        console.log(prop, 'propChange12')
    }

    getPropValue(prop, value) {
        if (prop === 'value') {
            return value ? "Good Name" : "Bad Name"
        }
        return value;

    }


    render() {
        return <div className="forms">
            <RXForm onValueChange={this.valueChange.bind(this)} onPropChange={this.propChange.bind(this)}>
                <RXTextInput name="uname"/>
                <RXTextInput name="password"  propRules={[{
                    prop: 'disabled',
                    element: 'uname',
                    expr: 'eq',
                    value: 'ravi'
                }, {
                    prop: 'value', element: 'uname', expr: 'function', func: function (val, rule) {
                        return val.value === 'ravikumar'
                    }, value: 'ravi'
                }]}/>
            </RXForm>

        </div>
    }
}
