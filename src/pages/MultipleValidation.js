/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXTextInput} from 'react-starter-components';

export default class MultipleValidation extends SmartWrapper {
    render(){
        return <div className="multiple-validation">
            <RXForm>
                <RXTextInput label="Email" placeholder="Enter Email" validations={[{expr:'req'}, {expr:'email'}]}/>
            </RXForm>
        </div>
    }
}
