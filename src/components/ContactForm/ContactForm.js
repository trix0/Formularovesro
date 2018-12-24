import React from 'react';
import classes from "./ContactForm.module.css"
import ReactAux from "../../hoc/ReactAux";
import OrangeButtonJS from "../UI/OrangeButtonJS/OrangeButtonJS";

const contactForm= (props) => {

return(
	<ReactAux>
	<h2 className={classes.Heading}>Napíšte nám</h2>
	<form>
		<div>
			<input className={classes.Name} type="text" name="meno" placeholder="Meno*"/>
			<input className={classes.Email} type="text" name="email" placeholder="Email*"/>
		</div>
		<input className={classes.Predmet} type="text" name="predmet" placeholder="Predmet*"/>
		<textarea className={classes.Textarea} name="sprava" placeholder="Správa...">
			
		</textarea>
		<OrangeButtonJS text="Odoslať"/>
	</form>
	</ReactAux>
	)
}

export default contactForm;