import React from 'react';
import ReactAux from "../../../hoc/ReactAux"
import HeadingHero from "../../HeadingHero/HeadingHero"
import Sluzba from "../../Sluzba/Sluzba"

const sluzby= (props) => {

return(
	<ReactAux>
		<section className={"container"}>
			<HeadingHero Heading="Ďalšie služby, ktoré poskytujeme"/>
			<p></p>
			<Sluzba Name="Ohlásenie živnosti" Content="Rýchle a jednoduché ohlásenie neobmedzeného množstva voľných živností za jednotnú
cenu. Za každú viazanú živnosť +7,50,- EUR." Price="25"/>
		</section>

	</ReactAux>
	)
}

export default sluzby;




