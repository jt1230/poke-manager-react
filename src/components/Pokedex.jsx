import './Pokedex.css'
import { useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'


const Pokedex = ({pokemon, pokeList, setPokeList, addPokemon}) => {
	const [pokeInfo, setPokeInfo] = useState([])
	const [pokeFilter, setPokeFilter] = useState('')
	const [popUp, setPopUp] = useState(false)

	return(
		<section className='pokedex'>
			<div className='pokedex-container' >	
				<div className='searchbar'>
					<input type='text' placeholder='Search for a Pokémon, e.g: Pikachu' 
						onChange={event => setPokeFilter(event.target.value)}/>
				</div>
				<div className='pokedex-content'>
					{pokemon.filter((poke) =>{
						if(pokeFilter == ''){
							return poke
						} else if(poke.name.toLowerCase().includes(pokeFilter.toLowerCase())){
							return poke
						}
					}).map((poke,i) => {
						return (
							<Card key={poke.id+i} pokemon={poke} infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} filterPokemon={pokeFilter} setPopUp={setPopUp} />)
						})
					}
				</div>
			</div>
			<Pokeinfo 
				data={pokeInfo} 
				party={false} 
				popUp={popUp} 
				setPopUp={setPopUp} 
				pokeList={pokeList} 
				setPokeList={setPokeList} 
				addPokemon={addPokemon}
			/>
		</section>
	)
}
export default Pokedex