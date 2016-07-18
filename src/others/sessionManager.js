/**
 * Created by ravi.hamsa on 7/16/16.
 */

import {core} from 'react-starter';
const {history, dataLoader} = core;
let userDetailsDef;


export default {

    start(){
        userDetailsDef = dataLoader.getRequestDef('userDetails');
    },

    getUsersDef : function(){
        return userDetailsDef;
    },

    clearUserDetails:function(){
        userDetailsDef = dataLoader.getRequestDef('userDetails');
    }
}