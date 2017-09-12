/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXTextInput, addValidationRule} from 'react-starter-components';

addValidationRule('noFloat', function(rule, value){
    const intValue = parseInt(value);
    const floatValue = parseFloat(value);
    return intValue === floatValue;
})


addValidationRule('floatOnly', function(rule, value){
    const intValue = parseInt(value);
    const floatValue = parseFloat(value);
    return floatValue > intValue ;
});

export default class ValidationRule extends SmartWrapper {
    render(){
        return <div className="validation-rule">
            <RXForm >
                <RXTextInput validations={[{expr:'number'},{expr:'noFloat'}]}  name="noFloat" label="No Float" />
                <RXTextInput validations={[{expr:'number'},{expr:'floatOnly'}]}  name="floatOnly" label="Float Only" />
            </RXForm>
        </div>
    }
}
