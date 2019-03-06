import React from 'react';
import classes from "./Email.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const email= (props) => {
	let valid=false;
	let touched=true;
	return(
		<div className={classes.Email}>
			<span>Váš email</span>
			<div className={classes.FirstEmail}>
				<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:null}</div>
				<div className={classes.InputContainer}>
					<label for="firstEmail">Email</label>
					<input id="firstEmail" type="email" name="firstEmail" placeholder="Zadajte váš email*" />
					<span>this is an error</span>
				</div>
				
			</div>
			<div className={classes.SecondEmail}>
<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:null}</div>
				<div className={classes.InputContainer}>
					<label for="secondEmail">Zopakujte email</label>			
					<input id="secondEmail" type="email" name="secondEmail" placeholder="Zopakujte váš email*" />
					<span>this is an error</span>
				</div>
			</div>
		</div>
		);	
}

export default email;