import React,{Component} from 'react';
import classes from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"
class Modal extends Component{

	render(){
		return(
			<div style={{display:this.props.show?"flex":"none"
					}} className={classes.ModalContainer}>
				<Backdrop show={this.props.show} clicked={this.props.closeModals}/>
				<div 
					className={classes.Modal}
					
				>
				{this.props.children} 
				</div>
			</div>
		);
	}
}


export default Modal;