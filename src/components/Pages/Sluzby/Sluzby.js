import React from 'react';
import ReactAux from "../../../hoc/ReactAux"
import HeadingHero from "../../HeadingHero/HeadingHero"
import Sluzba from "../../Sluzba/Sluzba"

const sluzby= (props) => {

return(
	<ReactAux>
		<section className={"container"}>
			<HeadingHero Heading="Ďalšie služby, ktoré poskytujeme"/>
			<p>Naše služby zahŕňajú aj pomoc aktívnym firmám pri ich rôznych situáciách v podnikaní. Pamätajte, že úspech je odmena za drinu (Sofokles). Drinu však nechajte na nás.</p>
			<Sluzba Name="1. Ohlásenie živnosti" Content="Rýchle a jednoduché ohlásenie neobmedzeného množstva voľných živností za jednotnú
cenu. Za každú viazanú živnosť +7,50,- EUR." Price="25"/>
			<Sluzba Name="2. Zmeny živnosti" Content="Zmenu miesta podnikania, obchodného mena je nevyhnutné ohlásiť príslušným úradom.
Každú zmenu Vašich osobných údajov vybavíme rýchlo, jednoducho, profesionálne." Price="10"/>			
			<Sluzba Name="3. Založenie akciovej spoločnosti" Content="Akciová spoločnosť je vhodná pre väčšie projekty. Komplikované založenie akciovej
spoločnosti s obrovským množstvom povinností nechajte na nás. Vysvetlíme Vám akým
spôsobom funguje akciová spoločnosť a niekoľkými krokmi začnete aj so svojimi
obchodnými partnermi svoje podnikanie." Note="Vrátane súdneho poplatku" Price="700"/>
			<Sluzba Name="4. Zmeny v akciovej spoločnosti" Content="Prevody akcii, rozšírenie/zúženie predmetu podnikania, vymenovanie členov
predstavenstva a iné zmeny vo Vašej akciovej spoločnosti zabezpečíme rýchlo
a jednoducho." Note="Vrátane súdneho poplatku" Price="300"/>		
	<Sluzba Name="5. Založenie komanditnej spoločnosti" Content="Komanditná spoločnosť v sebe ukrýva množstvo daňových výhod pre zahraničných
podnikateľov. Založenie komanditnej spoločnosti nechajte na nás a vy sa venujte svojmu
biznisu." Note="Vrátane súdneho poplatku" Price="300"/>	
<Sluzba Name="6. Zmeny v komanditnej spoločnosti" Content="Prevod obchodného podielu, úprava spoločenskej zmluvy vstup nového komaditistu,
komplementára a množstvo ďalších zmien Vám zabezpečíme za bezkonkurenčnú cenu
prostredníctvom našej spolupracujúcej advokátskej kancelárie." Note="Vrátane súdneho poplatku" Price="150"/>
<Sluzba Name="7. Založenie verejnej obchodnej spoločnosti" Content=" Pohodlné a rýchle založenie verejnej obchodnej spoločnosti so zárukou kvality. Naše
výsledky budú hovoriť za nás." Note="Vrátane súdneho poplatku" Price="300"/>
<Sluzba Name="8. Zmeny vo verejnej obchodnej spoločnosti" Content="Zmeny vo Vašom podniku, už nebudú starosťou, pokiaľ sa rozhodnete prenechať
komunikáciu s príslušnými orgánmi a inštitúciami na nás. Ponúkame Vám rýchly
a pohodlný zápis zmien." Price="150" Note="Vrátane súdneho poplatku"/>
<Sluzba Name="9. Správa elektronických schránok" Content="Elektronizáciou verejnej správy boli „postihnuté“ aj obchodné spoločnosti. Do
elektronickej schránky Vám môže byť doručený rozsudok súdu, platobný rozkaz, výzva
na úhradu a iné dokumenty. Tieto dokumenty nadobudnú právoplatnosť, resp. bude sa
na ne prihliadať tak ako keby ste ich prevzali napriek tomu, že Vám ostanú
v elektronickej schránke neprečítané. Prenechajte správu elektronickej schránky Vašej
spoločnosti na nás a vyhnete sa zbytočným nepríjemnostiam." Price="10" Note="1 elektronická schránka/mesiac"/>
<Sluzba Name="10. Likvidácia obchodných spoločností" Content="Máte záujem ukončiť podnikanie? Zabezpečíme Vám kompletnú dokumentáciu
vypracovanú spolupracujúcou advokátskou kanceláriou a následne aj likvidáciu Vašej
obchodnej spoločnosti." Price="Cena sa určuje po konzultácii"/>
<Sluzba Name="11. Zabezpečenie prechodného a trvalého pobytu pre cudzincov" Content="Konzultácia a príprava potrebných podkladov na zabezpečenie prechodného alebo
trvalého pobytu cudzincov na území Slovenskej republiky." Price="Cena sa určuje po konzultácii"/>
<Sluzba Name="12. Registrácia ochrannej známky" Content="Slovné, obrazové, priestorové alebo kombinované označenie, ktoré má spôsobilosť
odlíšiť sa Vám zaregistrujeme, tak aby bol Váš produkt plne chránený." Price="Cena sa určuje po konzultácii"/>
<Sluzba Name="13. Príprava bezpečnostných projektov podľa GDPR" Content="Ponúkame Vám poradenstvo a konzultácie pri príprave GDPR dokumentácie. Analýzu
možných rizík a posúdenie vplyvu Vašich procesov na ochranu osobných údajov." Price="Cena sa určuje po konzultácii"/>






		</section>

	</ReactAux>
	)
}

export default sluzby;



