import React from 'react';
import classes from "./Email.module.css";

const email= (props) => {
	return(
		<div class="email">
			<span>Váš email</span>
			<div class="firstEmail">
				<i>ok</i>
				<div>
					<label for="firstEmail">Email</label>
					<input id="firstEmail" type="email" name="firstEmail" placeholder="Zadajte váš email*" />
				</div>
				<span>this is an error</span>
			</div>
			<div class="secondEmail">
				<i>ok</i>
				<div>
					<label for="secondEmail">Zopakujte email</label>			
					<input id="secondEmail" type="email" name="secondEmail" placeholder="Zopakujte váš email*" />
				</div>
				<span>this is an error</span>
			</div>
		</div>
		);	
}

export default email;