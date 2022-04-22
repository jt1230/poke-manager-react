import { useState } from 'react'
import { pokeNumber } from './poke-number'
import { capitalize } from './capitalize'
import './Pokeinfo.css'

useState
const Pokeinfo = ({data, popUp, setPopUp,party, addPokemon}) => {
	return(
		<section className='poke-information'>
		{ (!popUp) ? '' : <div className='popup-content' onClick={() => setPopUp(false)}>	
			<div className={`poke-info ${data.types[0].type.name}`}>
				<h1>#{pokeNumber(data.id)} {capitalize(data.name)}</h1>
				<img src={data.sprites.other['official-artwork'].front_default} 
					alt={`Official artwork of ${data.name}`} />
				<div className='pokedata-container'>
					<div className='types' >{
						data.types.map(poke => {
							return(
								<div className={`type ${poke.type.name}`} key={poke.id + poke.type.name}>
									<h3>{capitalize(poke.type.name)}</h3>
								</div>
							)
						})}
					</div>
					<h3>Abilities:</h3>
					<div className='abilities'>{
						data.abilities.map(poke => {
							return(
								<div className='ability' key={poke.id + poke.ability.name}>
									<h3>{capitalize(poke.ability.name)}</h3>
								</div>
							)
						})}
					</div> 
					<h3>Stats:</h3>
					<div className='base-stats'>{
						data.stats.map(poke => {
							return(
								<div className='base-stat' key={poke.id + poke.stat.name}>
									<h3>{capitalize(poke.stat.name)}:</h3>
									<h3>{poke.base_stat}</h3>
								</div>
							)
						})}
					</div>
				</div>
				{party ? '' : <button onClick={() => addPokemon(data)}>Add To Party</button>}
			</div>	
			</div>}
		</section>
	)
}
export default Pokeinfo