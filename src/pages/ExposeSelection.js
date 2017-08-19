/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXDropdown} from 'react-starter-components';

var options = [{id:'1', name:'one'}, {id:'2', name:'two'}]

export default class ExposeSelection extends SmartWrapper {
    onValueChange(changed, fullObject){
        console.log(changed, fullObject)
    }
    render(){
        return <div className="expose-selection">
            <RXForm onValueChange={this.onValueChange.bind(this)}>
                <RXDropdown name="dropdown" multiSelect={true} exposeSelection={true} options={options}/>
            </RXForm>
        </div>
    }
}
