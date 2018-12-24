import React from 'react';
import classes from "./HeadingHero.module.css"

const headingHero= (props) => {

return(
	<section className={classes.Section}>
		<h1 className={classes.Heading}>{props.Heading}</h1>
	</section>
	)
}

export default headingHero;