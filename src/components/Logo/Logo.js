import React from 'react';
import formularLogo from "../../assets/images/form-logo.png"
import classes from "./Logo.module.css"
const logo= (props) => (
<div className={classes.Logo}>
	<img src={formularLogo} alt="FormularoveSRO"/>
</div>
)

export default logo;