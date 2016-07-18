/**
 * Created by ravi.hamsa on 7/12/16.
 */
import React, {Component, PropTypes} from "react";
import Promise from 'bluebird';
import 'whatwg-fetch';
import {match} from 'universal-router';
import {core} from 'react-starter';
import pages from './pages';
import components from './components';
import requestConfigs from './requests';
import sessionManager from './others/sessionManager';
const {Login, Register, Table} = pages;
const {App, Header, Footer} = components;
const {history, dataLoader, navigate} = core;

dataLoader.setCommonHeaders({
    'Content-Type': 'application/json'
})

for (let requestId in requestConfigs) {
    dataLoader.addResource(requestId, requestConfigs[requestId])
}
/*
 dataLoader.addResource('userDetails', {
 type: 'static',
 data: {
 errors:'user not loged in'
 },
 responseDelay: 400
 })
 */


sessionManager.start();

console.log(core, history, sessionManager)


const parseParams = function (location) {

    let str = location.params.attributes || '';
    let paramsStrings = str.split(';');
    let paramsObj = {};
    paramsStrings.forEach(function (item) {
        let itemParts = item.split('=');
        let key = itemParts[0];
        let value = itemParts[1];
        paramsObj[key] = value;
    })
    return paramsObj;
}

const emptyFunction = function () {
}


const routes = {
    path: '/',
    async action({next}) {
        const component = await next();
        const userDetails = await sessionManager.getUsersDef();
        console.log(userDetails);
        if (component !== undefined) {
            if (component.type.requiresSession === true && userDetails.errors) {
                navigate('login')
                return;
            } else if(component.type.requiresSession !== true && userDetails.name){
                navigate('table')
                return;
            }else {
                return render(component, userDetails);
            }
        } else {
            return render(<div>Unknown page</div>, userDetails);
        }

    },
    children: [
        {
            path: '/', action: function (location) {
            return <Login {...parseParams(location)}/>
        }
        },
        {
            path: '/login/:attributes*', action: function (location) {
            return <Login {...parseParams(location)}/>
        }
        },
        {
            path: '/register/:attributes*', action: function (location) {
            return <Register {...parseParams(location)}/>
        }
        },
        {
            path: '/table/:attributes*', action: function (location) {
            return <Table {...parseParams(location)}/>
        }
        }
    ]
};


const context = {
    insertCss: styles => styles._insertCss(),
    onSetTitle: value => (document.title = value),
}

function render(component, userDetails) {
    return new Promise(resolve => {
        ReactDOM.render(<HTML context={context}
                              userDetails={userDetails}>{component}</HTML>, document.getElementById('app'), resolve);
    });
}


function run() {
    // Get the current location
    const location = history.getCurrentLocation()
    console.log(location);
    // Listen for changes to the current location
    const unlisten = history.listen(location => {
        match(routes, {path: location.hash.substr(1), render});
    })

    match(routes, {path: location.hash.substr(1), render});
}

run();

class HTML extends Component {

    getChildContext() {
        const context = this.props.context;
        return {
            insertCss: context.insertCss || emptyFunction,
            onSetTitle: context.onSetTitle || emptyFunction,
        }
    }

    render() {
        return <div>
            <div className="page-wrap">
                <Header data={this.props.userDetails}></Header>

                <App>
                    {this.props.children}
                </App>
            </div>
            <Footer></Footer>
        </div>
    }
}

HTML.childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired
}