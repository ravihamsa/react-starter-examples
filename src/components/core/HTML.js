/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import App from './App';

function camelCaseToDash( myStr ) {
    return myStr.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}

export default class HTML extends Component {

    componentWillMount(){
        document.body.classList.add(camelCaseToDash(this.props.pageId));
    }

    componentWillReceiveProps(newProps){
        document.body.classList.remove(camelCaseToDash(this.props.pageId));
        document.body.classList.add(camelCaseToDash(newProps.pageId));
    }

    render() {
        return <div>
            <div className="page-wrap">
                <Header></Header>
                <div className="bread-crumb">Breadcrumb</div>
                <App>
                    {this.props.children}
                </App>
            </div>
            <Footer></Footer>
        </div>
    }
}