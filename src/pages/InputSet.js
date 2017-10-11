/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {
    SmartWrapper,
    RXSelectionElement,
    RXForm,
    RXElementGroup,
    getUniqueId,
    RXDropdown,
    RXDropdownItem
} from 'react-starter-components';

const rxOptions = [{id: '1', name: 'one'}, {id: '2', name: 'two'}, {id: '3', name: 'three'}, {id: '4', name: 'four'}]


class RXDropdownSet extends RXSelectionElement {


    constructor(props) {
        super(props);
        this.defineListItem();
        this.changing = false;
        this.savedValue=this.props.value.split(',');
    }

    defineListItem() {
        const setSelectionManager = this.selectionManager;
        class RXDropdownSetItem extends RXDropdownItem {
            getClassName() {
                let {itemData, selectionManager} = this.props;
                let className = 'list-item ';
                if (selectionManager.isSelected(itemData)) {
                    className += ' active';
                } else if (setSelectionManager.isSelected(itemData)) {
                    className += ' hidden';
                }
                return className;
            }
        }

        this.ListItem = RXDropdownSetItem;
        setTimeout(()=>{
            this.addOption();
        },4000)
    }

    getSelectedOptions() {
        return this.selectionManager.getSelected();
    }

    onValueChangeHandler(changed, fullObject) {
        if (this.changing) {
            return;
        }
        this.changing = true;
        this.applyValue(Object.values(fullObject).join(','));
        this.changing = false;
    }

    addOption(){
       this.savedValue.push(getUniqueId());
       this.forceUpdate();
    }

    renderElement() {
        const toRenderOptions = this.savedValue;
        return <RXElementGroup onValueChange={this.onValueChangeHandler.bind(this)}>
            {toRenderOptions.map((item, index) => {
                return <RXDropdown options={this.getFilteredOptions()} showLabel={false}
                                   name={item} key={item} value={item} ListItem={this.ListItem}>
                </RXDropdown>
            })}
        </RXElementGroup>
    }
}

RXDropdownSet.defaultProps = {
    ...RXSelectionElement.defaultProps,
    multiSelect: true
}

export default class InputSetPage extends SmartWrapper {
    onValueChangeHandler(changed, fullObject) {
        console.log(fullObject);
    }

    render() {
        return <div className="input-set">
            <RXForm onValueChange={this.onValueChangeHandler.bind(this)}>
                <RXDropdownSet options={rxOptions} value={'1,2'} name="depts" label="Departments" exposeSelection={true}/>
                <RXDropdownSet options={rxOptions} value={'1,2'} name="designations" label="Designations"/>
            </RXForm>
        </div>
    }
}
