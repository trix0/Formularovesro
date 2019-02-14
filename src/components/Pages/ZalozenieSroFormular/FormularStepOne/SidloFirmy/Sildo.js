import React from 'react';
import classes from "./Sidlo.module.css";

const sidlo= (props) => {
	return(
			<div class="sidlo">
				<span>Sídlo spoločnosti</span>
				<div class="streetName">
					<i>ok</i>
					<div>
						<label for="streetName">Názov ulice</label>
						<input id="streetName" type="text" name="streetName" placeholder="Názov ulice*" />
					</div>
					<span>this is an error</span>
				</div>
				<div>
					<div class="supisneOrientacneCislo">
						<i>ok</i>
						<div>
							<label for="supisneCislo">Súpisné čislo / Orientačné čislo</label>
							<input id="supisneCislo" type="text" name="supisneCislo" placeholder="Súpisné čislo*" />
							<input id="OrientacneCislo" type="text" name="orientacneCislo" placeholder="Oričntačné číslo*" />
						</div>
						<span>this is an error</span>
					</div>
				</div>
				<div>
					<div class="city">
						<i>ok</i>
						<div>
							<label for="city">Obec*</label>
							<input id="city" type="text" name="city" placeholder="Napr. Banská Bystrica*" />
						</div>
						<span>this is an error</span>
					</div>
					<div class="psc">
						<i>ok</i>
						<div>
							<label for="psc">PSČ*</label>
							<input id="psc" type="text" name="psc" placeholder="#####*" />
						</div>
						<span>this is an error</span>
					</div>
				</div>

				<div>
				<span>Na vytvorenie dokumentu "Súhlas vlastníka nehnuteľnosti" so zápisom nehnuteľnosti do obchodného registra ako sídla vašej spoločnosti budeme potrebovať nasledovné údaje:</span>
					<div class="propretyType">
						<i>ok</i>
						<div>
							<label for="propretyType">Druh priestoru*</label>
							<select id="propretyType" name="propretyType">
				  				<option value="nebytovyPriestor">Nebytový priestor</option>				
				  				<option value="bytVBytovomDome">Byt v bytovom dome</option>				
				  				<option value="inaBudova">Iná budova</option>				
				  				<option value="rodinnyDom">Rodinný dom</option>				
				  				<option value="samostatneStojacaGaraz">Samostatne stojaca garáž</option>				
							</select>

						</div>
						<span>this is an error</span>
					</div>
					<div class="vlastnikPriestoru">
						<i>ok</i>
						<div>
							<label for="vlastnikPriestoru">Vlastník priestoru*</label>
							<input id="vlastnikPriestoru" type="text" name="vlastnikPriestoru" placeholder="Priezvisko*" />
						</div>
						<span>this is an error</span>
					</div>
				</div>

			</div>

		);	
}

export default sidlo;

