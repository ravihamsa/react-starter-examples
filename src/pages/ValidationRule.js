/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXTextInput, addValidationRule, RXDropdown} from 'react-starter-components';

addValidationRule('noFloat', function (rule, value) {
    const intValue = parseInt(value);
    const floatValue = parseFloat(value);
    return intValue === floatValue;
})


addValidationRule('floatOnly', function (rule, value) {
    const intValue = parseInt(value);
    const floatValue = parseFloat(value);
    return floatValue > intValue;
});


export default class ValidationRule extends SmartWrapper {

    render() {
        return <div className="validation-rule">
            <RXForm >
                <RXTextInput validations={[{expr: 'number'}, {expr: 'noFloat'}]} name="noFloat" label="No Float" autoFocus
                             />
                <RXTextInput  validations={[{expr: 'number'}, {expr: 'floatOnly'}]} name="floatOnly" label="Float Only"/>
                <RXDropdown  name="dropdown" options={[{id:'1', name:'one'}, {id:'2', name:'two'}, {id:'3', name:'two'}, {id:'4', name:'two'}]}  bodyPosition={'up'}/>
            </RXForm>
        </div>
    }
}
