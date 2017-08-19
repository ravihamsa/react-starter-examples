/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXFormElement, InlineBody, InlinePopup, InlineButton, RXDatePicker} from 'react-starter-components';

export default class DatePicker extends SmartWrapper {

    onValueChange() {
        console.log(arguments)
    }

    render() {
        return <div className="date-picker">
            <RXForm onValueChange={this.onValueChange.bind(this)}>
                <RXDatePicker name="someDate"/>
            </RXForm>
        </div>
    }
}
