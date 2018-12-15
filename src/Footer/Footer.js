import React from 'react';
import classes from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const footer= (props) => (

<footer className={classes.Footer + " d-flex  flex-column flex-md-row justify-content-left justify-content-md-center"} >

	<div className="d-flex col-12 col-md-4 justify-content-left justify-content-md-center">
	  <ul>
	    <a href="/#"><li>Amet s.r.o</li></a>
	    <a href="/#"><li>Ochrana osobných údajov</li></a>
	    <a href="/#"><li>Všeobecné obchodné podmienky</li></a>
	    <a href="/#"><li>Pre advokátske kancelárie</li></a>
	  </ul>
	</div>
	<div className="d-flex col-12 col-sm-4 justify-content-left justify-content-md-center">
	  <ul>
	    <a href="/#"><li><u>Pomoc</u></li></a>
	    <a href="/#"><li>Ako fungujeme</li></a>
	    <a href="/#"><li>Čím sme odlišní</li></a>
	    <a href="/#"><li>Blog</li></a>
	  </ul>
	</div>
	<div className="d-flex col-12 col-sm-4 justify-content-left justify-content-md-center">
	  <ul>
	    <a href="/#"><li><u>Informácie</u></li></a>
	    <a href="/#"><li>info@domain.com</li></a>
	    <a href="/#"><li>+421 94815447 </li></a>
	    <li >
	      <a className="mx-1" href="facebook.com"><FontAwesomeIcon size="3x" icon={['fab', 'facebook']} /></a>
	      <a className="mx-1" href="/#"><FontAwesomeIcon size="3x" icon={['fab', 'linkedin', ]} /></a>
	    </li>
	  </ul>
	</div>
</footer>
)

export default footer;