/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {match} from 'universal-router';
import {dataLoader, utils} from 'react-starter-components';
import history from 'react-starter-components/lib/core/history'
import routes from './routes';
import requestConfigs from './requests';
import render from './render'
import omit from 'lodash/omit';



dataLoader.setCommonHeaders({
    'Content-Type': 'application/json',
})

dataLoader.setResponseParser((resp) => {
    if (resp.success) {
        return {
            data: resp.result,
            meta: omit(resp, 'result')
        };
    } else {
        return {
            errors: resp.errors
        };
    }
});

for (let requestId in requestConfigs) {
    dataLoader.addResource(requestId, requestConfigs[requestId])
}



function getHashString(location) {
    let hashString = location.hash;
}


function run() {
    // Get the current location
    const location = history.getCurrentLocation()
    // Listen for changes to the current location
    const unlisten = history.listen(location => {
        match(routes, {path: location.hash.substr(1), render});
    })
    match(routes, {path: location.hash.substr(1), render});
}


run();
