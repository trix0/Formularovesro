import React from 'react';
import classes from "./Onas.module.css"
import ReactAux from "../../../hoc/ReactAux"
import HeadingHero from "../../HeadingHero/HeadingHero"
import TeamMember from "../../TeamMember/TeamMember"

const onas= (props) => {

return(
	<ReactAux>
		<section className={"container"}>
			<HeadingHero Heading="O nás"/>
			<p>Formularovesro je webová stránka, ktorá umožňuje jednoduché, rýchle a hlavne svojpomocné
založenie spoločnosti s ručením obmedzeným (s.r.o.) a vykonanie zmien v spoločnosti s ručením
obmedzeným (s.r.o.). Pomocou pár jednoduchých krokov vybavíte všetko potrebné. Celý proces
trvá len niekoľko minút.
<br/>
<br/>
Sme mladý ľudia, ktorí vedia, že na začiatok podnikania je potrebné vynaložiť množstvo financí.
Tieto výdavky sme automatizáciou procesu založenia a zmien obchodných spoločností
minimalizovali v takej miere ako žiadna iná spoločnosť na trhu.<br/>
<br/>
Preto sme pre Vás pripravili projekt <span className={classes.TextHighlight}>Formularovesro.sk</span>
<br/>
V akomkoľvek prípade sa na nás neváhajte obrátiť – <span className={classes.TextHighlight}>office@formularovesro.sk</span></p>
		</section>
		<TeamMember src="Adam-Dragon-Zakladatel.png" alt="Adam Dragon - Zakladateľ" Name="Adam Dragon" Email="dragon@formularovesro.sk" About="Adam je zakladateľ portálu formularovesro.sk, je pôvodne z Komárna a absolvoval právo na
Univerzite Komenského v Bratislave."/>

	</ReactAux>
	)
}

export default onas;




