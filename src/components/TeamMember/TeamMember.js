import React from 'react';
import classes from "./TeamMember.module.css"

const teamMember= (props) => {
let image=require('../../assets/images/TeamMembers/'+props.src);

return(
	<section className={classes.Section+" container"}>
		<div className={classes.Container}>
			<div className={classes.Image}>
				<figure>
				    <img src={image} alt={props.alt} />
				    <figcaption>
				    	<h3>{props.Name}</h3>
				    	<span>({props.Email})</span>
				    </figcaption>
				</figure>
			</div>
			<div className={classes.About}>{props.About}</div>
		</div>
	</section>
	)
}

export default teamMember;