import React from 'react';
import classes from "./AkoFungujeme.module.css"
import ReactAux from "../../../hoc/ReactAux"
import HeadingHero from "../../HeadingHero/HeadingHero"
import Steps from "../../Steps/Steps"

const akoFungujeme= (props) => {

return(
	<ReactAux>
		<section className={"container"}>
			<HeadingHero Heading="Ponúkame jedinečný spôsob svojpomocného založenia a realizácie zmien v s.r.o."/>
			<p>Vo formulári
vyplníte niekoľko základných údajov a pripravené dokumenty spolu s podrobným návodom Vám
budú doručené na e-mailovú adresu. Na základe tohto návodu si danú spoločnosť budete vedieť
rýchlo a jednoducho založiť aj vy. Potrebujete na to len občiansky preukaz s čipom.
<br/>
<br/>
V prípade ak máte záujem o založenie spoločnosti (resp. vykonania zmien v spoločnosti) našou
spolupracujúcou advokátskou kanceláriou stačí zadanie niekoľkých základných údajov,
jednoduché odkliknutie a všetko zabezpečíme za Vás.<br/>
<br/>
Naša stránka je chránená protokolom, ktorý zaručuje bezpečnosť osobných údajov. Vaše osobné
údaje sú u nás v bezpečí a zaručujeme ich ochranu v zmysle platných právnych predpisov
(GDPR).</p>
		</section>
		<Steps  Title="Postup"/>
	</ReactAux>
	)
}

export default akoFungujeme;




