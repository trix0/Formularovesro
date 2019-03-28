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
								<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
					<label htmlFor="firstEmail">Email</label>
					<input id="firstEmail" type="email" name="firstEmail" placeholder="Zadajte váš email*" />
					{valid?null:<div className={classes.error}>{errorMessage?errorMessage:defaultErorr}</div>}
				</div>
				
			</div>
			<div className={classes.SecondEmail}>
				<div className={classes.ValidationIcon}>{touched?valid?<i><FontAwesomeIcon color="#18C915" size="2x" icon="check-circle" /></i>:<i><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>:<i className={classes.ValidationIconHidden}><FontAwesomeIcon color="red" size="2x" icon="times-circle" /></i>}</div>
				<div className={classes.InputContainer}>
					<label htmlFor="secondEmail">Zopakujte email</label>			
					<input id="secondEmail" type="email" name="secondEmail" placeholder="Zopakujte váš email*" />
					{valid?null:<div className={classes.error}>{errorMessage2?errorMessage2:defaultErorr}</div>}
				</div>
			</div>
		</div>
		);	
}

export default email;