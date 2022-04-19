import { useState } from "react"

useState
const Pokeinfo = ({data, popUp, setPopUp,party, addPokemon}) => {

	return(
		
		<>
		{ (!popUp) ? "" : <div className="popup-content" onClick={() => setPopUp(false)}>	
			<div className="poke-info">
				{
					
					(!data) ? (<h3>Loading pokeinfo ...</h3>) : (
						<div className={`poke-info ${data.types[0].type.name}`}>
							<h1>#{data.id} {data.name[0].toUpperCase()+data.name.substring(1)}</h1>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
							<div className="types" >
								{
									data.types.map(poke => {
										return(
											<div className={`type ${poke.type.name}`} key={poke.id + poke.type.name}>
											</div>
										)
									})
								}
							</div>
							<div className="abilities">
								{
									data.abilities.map(poke => {
										return(
											<div className="group" key={poke.id + poke.ability.name}>
												<h2>{poke.ability.name[0].toUpperCase()+poke.ability.name.substring(1)}</h2>
											</div>
										)
									})
								}
							</div> 
							<div className="base-stat">
								{
									data.stats.map(poke => {
										return(
											<div className="base-stat item" key={poke.id + poke.stat.name}>
												<h3>{poke.stat.name[0].toUpperCase()+poke.stat.name.substring(1)}: {poke.base_stat} </h3>
											</div>
										)
									})
								}
							</div>
							{party ? "" : <button className="btn" onClick={() => addPokemon(data)}>TODO - Add to party</button>}
						</div>
					)
				}
				
			</div>
		</div> }
		</>
	)
}
export default Pokeinfo