/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {
    SmartWrapper,
    RXForm,
    RXTextInput,
    RXDropdown,
    Form,
    TextInput,
    Dropdown,
    DatePicker
} from 'react-starter-components';


let options = [{id: '1', name: 'one'}, {id: '2', name: 'two'}]

let validationRequest = {requestId:'serverValidation',getParams:(attr)=>{
    return {attr1:'value1'}
}}

export default class ServerValidation extends SmartWrapper {

    valueChange(changed, fullObject) {
        // console.log(changed, fullObject, 'valueChange')
    }

    onSubmitHandler1() {
        debugger;
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
            <h1>RXForm PropRules</h1>
            <RXForm onValueChange={this.valueChange.bind(this)} onPropChange={this.propChange.bind(this)}
                    onSubmitHandler={this.onSubmitHandler1.bind(this)}>
                <RXTextInput name="uname" serverValidation={validationRequest}/>
                <RXTextInput name="password"/>


                <button>Submit</button>


            </RXForm>



        </div>
    }
}
