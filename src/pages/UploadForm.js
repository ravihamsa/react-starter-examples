/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXTextInput, RXFileInput, RXForm} from 'react-starter-components';

export default class UploadForm extends SmartWrapper {

    onSubmitHandler(payload){
        let def = this.addRequest('', 'uploadRequest',payload.data, (e)=>{
            console.log('progresss');
        })

        def.done((resp)=>console.log(resp ,'done'))
        def.catch((resp)=>console.log(resp ,'fail'))
    }

    onSubmitHandler2(payload){
        let def = this.addRequest('', 'uploadRequestError',payload.data, (e)=>{
            console.log('progresss');
        })

        def.done((resp)=>console.log(resp ,'done'))
        def.catch((resp)=>console.log(resp ,'fail'))
    }

    propChange(prop) {
        console.log(prop, 'propChange12')
    }


    render(){
        return <div className="upload-form">

            <RXForm onSubmitHandler={this.onSubmitHandler.bind(this)} onPropChange={this.propChange.bind(this)}>
                <RXTextInput name="uname"/>
                <RXFileInput name="file" />
                <button>Submit</button>
            </RXForm>

            <h1>Error Case</h1>

            <RXForm onSubmitHandler={this.onSubmitHandler2.bind(this)} onPropChange={this.propChange.bind(this)}>
                <RXTextInput name="uname"/>
                <RXFileInput name="file" />
                <button>Submit</button>
            </RXForm>
        </div>
    }
}
