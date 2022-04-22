import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'
import PartyCard from './PartyCard'
import Pokeinfo from './Pokeinfo'



const Party = ({pokeList, setPokeList}) => {

	const [pokeName, setPokeName] = useState("")
	const [pokeInfo, setPokeInfo] = useState(null)
	const [popUp, setPopUp] = useState(false)
	const [inputTouched, setInputTouched] = useState(false)
	let inputMessage = "";
	
	if( setInputTouched ) {
		// addressCss = addressIsValid ? 'valid' : 'invalid'
		inputMessage = pokeName.length >= 1 ? '' : 'Enter at least one letter!'
	}

	const removePoke = (id) => {
		let updatePokeList = pokeList.filter(poke => poke.party_id !== id)
		setPokeList(updatePokeList)
	}

	const editPoke = (id) => {
		if(pokeName.length >= 1){
			let newChosenPokemon = pokeList.find(poke => poke.party_id == id)
			setInputTouched(false)

			setPokeList(pokeList.map(poke => {
				if(poke.party_id == newChosenPokemon.party_id)
					return {...poke, name: pokeName}
				else 
					return poke
			}))
		}
	}
	
	return(
		<>
			{<div className="party">
				<div className="party-header" >
					<h3>Pokemon Party </h3>
					<p>Here you can rename your pokemons and chose to release them back to the wild. </p> 
					<p>If you want to add a NICKNAME to a pokemon, write what nickname you want to change to and then click the <FontAwesomeIcon className="textEdit" icon={faEdit} /> on chosen pokemon. </p>
				</div>

				<input type="text" 
					placeholder={inputTouched ? inputMessage : "Name here, e.g: Lucky"}
					onChange={event => setPokeName(event.target.value)}
					onBlur={() => setInputTouched(true)} />
				
				<div className="party-pokes">
					<div className="party-content">
						{pokeList.length <= 0 ? <p>Oh, my ... Looks quite empty in here. You should go and catch some pokemon to light up the party!</p> : 
							pokeList.map((poke, i) => {return (<PartyCard key={poke.id + poke.name + i} pokeList={pokeList} pokemon={poke} infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} setPopUp={setPopUp} removePoke={removePoke} editPoke={editPoke} />)})}
				</div>
					</div>
				<Pokeinfo data={pokeInfo} popUp={popUp} setPopUp={setPopUp} party={true}/>
			</div>}
		</>
	)
}
export default Party