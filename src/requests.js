/**
 * Created by ravi.hamsa on 7/16/16.
 */

let urlPrefix = 'api/spoblo/service/'

export default {
    login: {
        type: 'static',
        method: 'post',
        cache:'none',
        url: urlPrefix + 'login',
        data:{authKey:'123123123123123'}
    },

    logout: {
        type: 'static',
        method: 'put',
        cache:'none',
        url: urlPrefix + 'logout',
        data:{message:'logout successful'}
    },

    register:{
        type: 'url',
        method:'get',
        cache:'none',
        url: urlPrefix + 'register',
        data:{message:'registered successfully'}
    },

    userDetails: {
        type: 'static',
        cache:'none',
        data: {
            errors:['not logged in']
        },
        responseDelay: 100
    }
}



