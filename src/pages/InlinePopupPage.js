/**
 * Created by ravi.hamsa on 10/8/16.
 */
import React, {Component, PropTypes} from "react";
import {SmartWrapper, InlinePopup, InlineButton, InlineBody} from 'react-starter-components';
import {InlineModal, InlineModalBody, InlineModalButton} from 'react-starter-components';

class SomethingButton extends Component {
	render(){
		return  <div style={{display:'inline-block', 'backgroundColor':'red'}}>
			<button onClick={this.props.onClick}>button</button>
		</div>
	}
}

export default class InlinePopupPage extends SmartWrapper {

    showPopup(e){
        e.preventDefault();
        this.myPopup.props.togglePopup();
    }

    render(){
        return <div className="popup-page" style={{padding:'100px'}}>
            <InlinePopup>
                <InlineButton>
                    <div>click me</div>
                </InlineButton>
                <InlineBody  ref={popup=>this.myPopup=popup} className="ravi-special">
                    <div style={{backgroundColor:'#fff'}}>This is the popup body</div>
                </InlineBody>
            </InlinePopup>


	        <h1>Modal inside modal</h1>
	        <InlineModal>
		        <InlineModalButton>
			        <SomethingButton />
		        </InlineModalButton>
		        <InlineModalBody  ref={popup=>this.myPopup=popup} name={"outside"}>
			        <div>
				        <p style={{whiteSpace:'nowrap'}}>somethingsssssssss extra test </p>
				        <InlineModal >
					        <InlineModalButton>
						        <SomethingButton />
					        </InlineModalButton>
					        <InlineModalBody  ref={popup=>this.myPopup=popup} name={"inside"}>
						        <div>This is the popup body</div>
					        </InlineModalBody>
				        </InlineModal>
			        </div>
		        </InlineModalBody>
	        </InlineModal>


	        <h1>Valign - top</h1>

	        <InlineModal >
		        <InlineModalButton>
			        <SomethingButton />
		        </InlineModalButton>
		        <InlineModalBody  ref={popup=>this.myPopup=popup} valign="top">
			        <div style={{whiteSpace:'nowrap'}}>This is the popup body</div>
		        </InlineModalBody>
	        </InlineModal>


	        <h1>Halign - right</h1>


	        <InlineModal >
		        <InlineModalButton>
			        <SomethingButton />
		        </InlineModalButton>
		        <InlineModalBody  ref={popup=>this.myPopup=popup} halign="right">
			        <div style={{whiteSpace:'nowrap'}}>This is the popup body</div>
		        </InlineModalBody>
	        </InlineModal>

	        <h1>Halign - center</h1>

	        <InlineModal >
		        <InlineModalButton>
			        <SomethingButton />
		        </InlineModalButton>
		        <InlineModalBody  ref={popup=>this.myPopup=popup} halign="center">
			        <div style={{whiteSpace:'nowrap'}}>This is the popup body</div>
		        </InlineModalBody>
	        </InlineModal>


	        <h1>bodyPosition - up</h1>

	        <InlineModal >
		        <InlineModalButton>
			        <SomethingButton />
		        </InlineModalButton>
		        <InlineModalBody  ref={popup=>this.myPopup=popup} bodyPosition="up">
			        <div style={{whiteSpace:'nowrap'}}>
				        <ul>
					        <li>Item 1 asdf asd f asdf a sdf asd fa sdf asd f</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
					        <li>Item 1</li>
				        </ul>
			        </div>
		        </InlineModalBody>
	        </InlineModal>
        </div>

    }
}
