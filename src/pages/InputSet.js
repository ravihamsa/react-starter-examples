/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXSelectionElement} from 'react-starter-components';


class RXTextInputSet extends RXSelectionElement {
    renderElement() {
        const {ListItem = RXSelectionItem} = this.props;
        return <div onClick={this.onClickHandler.bind(this)} ref="listRoot">
            <List items={this.getFilteredOptions()} selectionManager={this.selectionManager}
                  selection={this.state.__shadowValue} ListItem={ListItem}/>
        </div>
    }
}

RXTextInputSet.defaultProps = {
    ...RXSelectionElement.defaultProps,
    multiSelect:true
}

export default class InputSetPage extends SmartWrapper {
    render(){
        return <div className="input-set">This is page InputSet</div>
    }
}
