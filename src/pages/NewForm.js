/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SimpleControllerV2, SmartWrapper } from 'react-starter-components';


const domProps = 'abbr accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay cellPadding cellSpacing challenge charset checked cite class className cols colSpan command content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable dropzone encType for form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode isMap itemId itemProp itemRef itemScope itemType kind label lang list loop manifest max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern ping placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes sortable span spellCheck src srcDoc srcSet start step style tabIndex target title translate type typeMustMatch useMap value width wmode wrap onCopy onCut onPaste onLoad onError onWheel onScroll onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd'.split(' ');
const getDomProps = (props) => {
	const filteredProps = {};
	for (const prop in props) {
		if (domProps.indexOf(prop) > -1) {
			filteredProps[prop] = props[prop];
		}
	}
	return filteredProps;
};


class InputElement extends Component {

	onChangeHandler(event) {
		console.log(event);
	}

	filterDomProps(props) {
		const filteredProps = getDomProps(props);
		const onChangeHandler = filteredProps.onChange;
		if (onChangeHandler !== undefined) {
			filteredProps.onChange = (event) => {
				this.onChangeHandler(event);
				onChangeHandler(event);
			};
		} else {
			filteredProps.onChange = (event) => {
				this.onChangeHandler(event);
			};
		}
		return filteredProps;
	}

	render() {
		return <input {...this.filterDomProps(this.props)}/>;
	}
}

InputElement.contextTypes = {
	form: PropTypes.object.isRequired
};


class Controller {
	getResource(key, props) {
		return new Promise((resolve,reject)=>{
			resolve({data:[{id:1, name:'one'}, {id:2, name:'two'}]})
		})
	}
}



class Widget extends Component {

}

Widget.propTypes = {
	controller: PropTypes.object.isRequired,
	controllerKey: PropTypes.string.isRequired
};

class FormElement extends Component {


	getChildContext() {
		return {
			form: this
		};
	}

	filterDomProps(props) {
		return getDomProps(props);
	}

	render() {
		return <form {...this.filterDomProps(this.props)}/>;
	}
}

FormElement.childContextTypes = {
	form: PropTypes.object.isRequired
};

InputElement.defaultProps = {
	type: 'text',
	placehodler: 'Enter Text',
	disabled: false
};

export default class NewForm extends SmartWrapper {
	constructor(props) {
		super(props);
		this.state = {
			testValue: '333333'
		};

		setTimeout(() => {
			this.setState({testValue: 12345});
		}, 5000);
	}

	handleOnChange(event) {
		this.setState({
			testValue: event.target.value
		});
	}

	render() {
		return <div className="new-form">
			<InputElement name="userName" value={this.state.testValue} onChange={this.handleOnChange.bind(this)}/>
			<InputElement name="password" type="password"/>
		</div>;
	}
}
