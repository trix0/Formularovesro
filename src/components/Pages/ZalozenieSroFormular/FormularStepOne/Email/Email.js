import React from 'react';
import classes from "./Email.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const email= (props) => {
	let valid=false;
	let touched=true;
	let errorMessage="Email sa nezhoduje";
	let errorMessage2="Email sa nezhoduje";

	let defaultErorr="Niečo sa pokazilo. Kontaktujte nás a mi vám pomôžeme.";
	return(
		<div className={classes.Email}>
			<h5>Váš email</h5>
			<div className={classes.FirstEmail}>
			<div className={classes.ValidationIcon}>{props.state.validation.email.touched?props.state.validation.email.valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
					<label htmlFor="email">Email</label>
					<input onChange={props.handleInputChange}  id="email" type="email" name="email" placeholder="Zadajte váš email*" />
						<div className={props.state.validation.email.valid||!props.state.validation.email.touched?classes.errorHidden:classes.error}>{props.state.validation.email.error?props.state.validation.email.error:defaultErorr}</div>				</div>
				
			</div>
			<div className={classes.SecondEmail}>
			<div className={classes.ValidationIcon}>{props.state.validation.emailRepeat.touched?props.state.validation.emailRepeat.valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
					<div className={classes.InputContainer}>
					<label htmlFor="emailRepeat">Zopakujte email</label>			
					<input onChange={props.handleInputChange} id="emailRepeat" type="email" name="emailRepeat" placeholder="Zopakujte váš email*" />
					<div className={props.state.validation.emailRepeat.valid||!props.state.validation.emailRepeat.touched?classes.errorHidden:classes.error}>{props.state.validation.emailRepeat.error?props.state.validation.emailRepeat.error:defaultErorr}</div>
				</div>
			</div>
		</div>
		);	
}

export default email;