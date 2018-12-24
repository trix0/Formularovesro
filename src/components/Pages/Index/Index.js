import React from 'react';
import classes from "./Index.module.css"
import ReactAux from "../../../hoc/ReactAux"
import HeroImage from "../../HeroImage/HeroImage";
import Card from "../../Card/Card";
import ContactForm from "../../ContactForm/ContactForm"

const index= (props) => {

return(
	<ReactAux>
		<HeroImage bgImage="banner.jpg" heading="Založenie s.r.o" heading2="rýchlo a jednoducho" paragraph="Zo všetkými službami, s kompletnou dokumentáciou pripravenou v spolupráci s advokáckou kanceláriou" buttonText="Založiť s.r.o" buttonLink="zalozit-sro"/>
		<section className={classes.Cards+" container"}>
		<Card 
			imgAlt="Zmeny v sro"
			bgImage="286x180.png" title="Zmeny v s.r.o" 
			paragraph="Zmena obchodného mena, sídla, vymenovanie a odvolanie konateľa, rozšírenie a zúženie predmetu podnikania a ďalšie." 
			link="zmeny-v-sro" 
			linkText="Zistiť viac"
		/>
		<Card 
			imgAlt="Zmeny v sro"
			bgImage="286x180.png" title="Zmeny v s.r.o" 
			paragraph="Zmena obchodného mena, sídla, vymenovanie a odvolanie konateľa, rozšírenie a zúženie predmetu podnikania a ďalšie." 
			link="zmeny-v-sro" 
			linkText="Zistiť viac"
		/>
		<Card 
			imgAlt="Zmeny v sro"
			bgImage="286x180.png" title="Zmeny v s.r.o" 
			paragraph="Zmena obchodného mena, sídla, vymenovanie a odvolanie konateľa, rozšírenie a zúženie predmetu podnikania a ďalšie." 
			link="zmeny-v-sro" 
			linkText="Zistiť viac"
		/>
		</section>
		<section className={classes.Contact+" container"}>
			<ContactForm/>
		</section>
	</ReactAux>
	)
}

export default index;




