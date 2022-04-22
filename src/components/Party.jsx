import './Party.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import PartyCard from './PartyCard'
import Pokeinfo from './Pokeinfo'

const Party = ({pokeList, setPokeList}) => {

	const [pokeName, setPokeName] = useState('')
	const [pokeInfo, setPokeInfo] = useState(null)
	const [popUp, setPopUp] = useState(false)
	const [inputTouched, setInputTouched] = useState(false)
	let inputMessage = '';
	
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
		<section className='party'>
			<div className='party-header' >
				<h2>Pokemon Party </h2>
				<p>Here you can rename your pokemons and chose to release them back to the wild. </p> 
				<p>Add a NICKNAME to a pokemon by entering a nickname in the field below and then click the <FontAwesomeIcon className='textEdit' icon={faEdit} /> on that pokemon. </p>
			</div>

			<input type='text' 
				placeholder={inputTouched ? inputMessage : 'Name here, e.g: Lucky'}
				onChange={event => setPokeName(event.target.value)}
				onBlur={() => setInputTouched(true)} />
			
			<div className='party-pokes-container'>
				<div className='party-pokes'>
					{pokeList.length <= 0 ? <p>Oh, my ... Looks quite empty in here. You should go and catch some pokemon to light up the party!</p> : 
						pokeList.map((poke, i) => {return(
						<PartyCard 
							key={poke.id + poke.name + i} 
							pokeList={pokeList} pokemon={poke} 
							infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} 
							setPopUp={setPopUp} removePoke={removePoke} 
							editPoke={editPoke} />
						)})}
				</div>
			</div>

			<Pokeinfo data={pokeInfo} popUp={popUp} setPopUp={setPopUp} party={true}/>
		</section>
	)
}
export default Party