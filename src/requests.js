/**
 * Created by ravi.hamsa on 7/16/16.
 */

import _ from 'lodash';
let urlPrefix = 'backend/api/v1/'

const tableDataParser = (data, meta) => {
    return {
        records:data,
        totalRecords:meta.total_count
    }
}

export default {
    getListOfSomeItems: {
        type: 'url',
        method: 'get',
        cache:'none',
        url: urlPrefix + 'dummyData',
        parser: function(data){
            return data;
        }
    },
    serverValidation: {
        type: 'url',
        method: 'get',
        cache:'none',
        url: urlPrefix + 'dummyData',
        parser: function(data){
            return ;
        }
    },
    uploadRequest: {
        type: 'url',
        method: 'upload',
        cache:'none',
        url: urlPrefix + 'upload',
        parser: function(data){
            return data;
        }
    },
    uploadRequestError: {
        type: 'url',
        method: 'upload',
        cache:'none',
        url: urlPrefix + 'uploadError',
        parser: function(data){
            return data;
        }
    },

    createAdvertiser:{
        type:'url',
        method:'post',
        cache:'none',
        url:urlPrefix + 'account/adv/create',
        parser: function(data){
            debugger;
            return data;
        }
    },
    getInventoryUsers: {
        type: 'url',
        cache: 'none',
        method: 'get',
        url: '' + '/users/apps/:app_id/?start=:start&offset=:offset&sortKey=:sortKey&sortOrder=:sortOrder&filterKey=:filterKey&filterQuery=:filterQuery',
        parser: tableDataParser
    }
}



