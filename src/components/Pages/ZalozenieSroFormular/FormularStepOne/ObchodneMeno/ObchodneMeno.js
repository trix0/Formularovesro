import React from 'react';
import classes from "./ObchodneMeno.module.css";

const obchodneMeno= (props) => {
	return(
		<div class="obchodneMeno">
			<div class="inputs">
				<i>ok</i>
				<input type="text" name="obchodneMenoInput" placeholder="Zvoľte obchodné meno*"/>
				<select name="druhSpolocnostiInput">
				  <option value="sro">s.r.o.</option>
				  <option value="ciarkaSro">, s.r.o.</option>
				  <option value="spolSro">, spol. s.r.o</option>
				</select>
				<button>Overiť</button>
			</div>
		<div class="error">This is an error</div>
		</div>

		);	
}

export default obchodneMeno;