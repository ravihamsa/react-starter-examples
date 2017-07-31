/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, RXForm, RXTextInput, List, RXSelect, RXCheckbox, RXCheckList, RXRadioList, RXDropdown, RXSelectionElement} from 'react-starter-components';


class FormElementItem extends Component {


    render(){
        return <RXTextInput />
    }
}


const typeElementClassMap = {
    select:RXSelect,
    dropdown:RXDropdown,
    checkList:RXCheckList,
    checkbox:RXCheckbox,
    radioList:RXRadioList,
    selection:RXSelectionElement
}


class RXElementList extends RXForm {
    getElementClass(item){
        return typeElementClassMap[item.type] || RXTextInput
    }

    renderElements(){
        let {elements} = this.props;
        return elements.map(item=>{
            item.name = item.id;
            const ElementClass = this.getElementClass(item);
            return <ElementClass {...item} key={item.id}/>
        })
    }

    render() {
        return <form onSubmit={this.onSubmitHandler.bind(this)} className={this.props.className}>
            {this.renderElements()}
        </form>;
    }
}


let elementList = [{id:'uname', placeholder:'Enter User Name', label:"User Name"}, {id:'password', type:'password', placeholder:'Enter Password', label:"Password"}]

export default class ElementList extends SmartWrapper {
    valueChange(changed, fullObject){
        console.log(fullObject)
    }

    render(){
        return <div className="element-list">

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <RXElementList elements={elementList} onValueChange={this.valueChange.bind(this)} />
                    </div>
                </div>
            </div>

        </div>
    }
}
