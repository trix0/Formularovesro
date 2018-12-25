import React from 'react';
import classes from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';



const footer= (props) => (

<footer className={classes.Footer + " d-flex  flex-column flex-md-row justify-content-left justify-content-md-center"} >

	<div className="d-flex col-12 col-md-4 justify-content-left justify-content-md-center">
	  <ul>
	    <Link to="/#"><li>Amet s.r.o</li></Link>
	    <Link to="/#"><li>Ochrana osobných údajov</li></Link>
	    <Link to="/#"><li>Všeobecné obchodné podmienky</li></Link>
	    <Link to="/#"><li>Pre advokátske kancelárie</li></Link>
	  </ul>
	</div>
	<div className="d-flex col-12 col-sm-4 justify-content-left justify-content-md-center">
	  <ul>
	    <li><u>Pomoc</u></li>
	    <Link to="/ako-fungujeme"><li>Ako fungujeme</li></Link>
	    <Link to="/cim-sme-odlisni"><li>Čím sme odlišní</li></Link>
	    <Link to="/#"><li>Blog</li></Link>
	  </ul>
	</div>
	<div className="d-flex col-12 col-sm-4 justify-content-left justify-content-md-center">
	  <ul>
	  	<li><u>Informácie</u></li>
	    <li>office@formularovesro.sk</li>
	    <li>+421 94815447 </li>
	    <li >
	      <a className="mx-1" target="_blank" href="https://www.facebook.com"><FontAwesomeIcon size="3x" icon={['fab', 'facebook']} /></a>
	      <a className="mx-1" target="_blank" href="https://www.linkedin.com"><FontAwesomeIcon size="3x" icon={['fab', 'linkedin', ]} /></a>
	    </li>
	  </ul>
	</div>
</footer>
)

export default footer;