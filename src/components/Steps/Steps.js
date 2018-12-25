import React from 'react';
import classes from "./Steps.module.css"
import ReactAux from "../../hoc/ReactAux"
import Step from "./Step/Step"
const steps= (props) => {
return(
		<ReactAux>
				<section className={classes.Steps+" container"}>
				<h1>{props.Title}</h1>
				<Step Heading="1.Vylníte údaje" Content="Vyplníte niekoľko základných údajov o firme, ktorú chcete založiť, resp. v ktorej chcete
vykonať zmeny. Vyberiete si či dané úkony vykonáte samostatne alebo s pomocou našej
spolupracujúcej advokátskej kancelárie."/>
				<Step Heading="2. Uhradíte administratívny poplatok" Content="Výška poplatku závisí od spôsobu založenia, resp.
vykonania zmien (tento poplatok je našou odmenou). V prípade ak sa rozhodnete
založenie spoločnosti (resp. vykonanie zmien v spoločnosti) prenechať našej
spolupracujúcej advokátskej kancelárii v tomto momente uhradíte okrem
administratívneho poplatku aj správny poplatok (tento poplatok je zákonom stanovený
a bude následne prevedený na účet príslušného okresného registra)."/>				
<Step Heading="3. Podpíšete dokumenty" Content="Akonáhle uhradíte administratívny poplatok, budú Vám
sprístupnené dokumenty aj s navigáciou k podpisovaniu daných dokumentov (niektoré
dokumenty je nutné podpísať pred notárom)."/>
<Step Heading="4. Zápis spoločnosti do obchodného registra" Content="Môžete si vybrať či si spoločnosť
registrujete svojpomocne (nižší administratívny poplatok) alebo prenecháte všetku
komunikáciu so súdom na našu spolupracujúcu advokátsku kanceláriu."/>
<Step Heading="5. Výpis z obchodného registra" Content="Všetky dokumenty (t.j. potvrdenie o zápise spoločnosti do
obchodného registra, výpis z obchodného registra, osvedčenie o živnostenskom
podnikaní, atď.) Vám budú doručené do sídla spoločnosti."/>
			        
			    </section>
	</ReactAux>
	)
}

export default steps;

