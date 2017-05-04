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


export default class Forms extends SmartWrapper {

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
                <RXTextInput name="uname"/>
                <RXTextInput name="password" propRules={[{
                    prop: 'disabled',
                    element: 'uname',
                    expr: 'eq',
                    value: 'ravi'
                }, {
                    prop: 'value', element: 'uname', expr: 'function', func: function (val, rule) {
                        return val.value === 'ravikumar'
                    }, value: 'ravi'
                }]}/>

                <RXDropdown options={options} name="dp" disabled={true}/>
                <RXDropdown options={options} name="dp2"/>

                <button>Submit</button>


            </RXForm>

            <h1>Form Disabled</h1>
            <Form>
                <Dropdown options={options} name="dp" disabled={true}/>
                <DatePicker name="dpicker" disabled={true}/>

                <Dropdown options={options} name="dp"/>
                <DatePicker name="dpicker"/>
            </Form>

            <h1>Form Dropdown Single select reselectd</h1>
            <Form>
                <Dropdown options={options} name="dp"/>

                <Dropdown options={options} multiSelect={true} name="dpm"/>

            </Form>

            <h1>RXForm Dropdown Single select reselectd</h1>
            <RXForm>
                <RXDropdown options={options} name="dp"/>
                <RXDropdown options={options} multiSelect={true} name="dpm"/>
            </RXForm>


            <h1>Date Picker past Date</h1>
            <Form>
                <DatePicker name="dp" label="No Min Max" />
                <DatePicker name="dp" minDate="10/05/2017" label="Only Min"/>
                <DatePicker name="dp" maxDate="20/05/2017" label="Only Max"/>
                <DatePicker name="dp" minDate="10/05/2017" maxDate="20/05/2017" label="Both Min and Max"/>
            </Form>


        </div>
    }
}
