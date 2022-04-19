import { useState, useEffect } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'


const Pokedex = ({pokeData, pokeList, setPokeList, addPokemon}) => {
	const [pokeInfo, setPokeInfo] = useState([])
	const [pokeFilter, setPokeFilter] = useState('')
	const [popUp, setPopUp] = useState(false)
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {

		const getPokemon = async(response) => {		
			response.map(async(pokemon) =>{
				const result = await fetch(pokemon.url)
				let data = await result.json()
	
				setPokemon(element => {
					element = [...element, data]
					element.sort((a, b) => a.id - b.id)
					return element
				})
			})
		}
		getPokemon(pokeData)

	}, [])


	

	return(
		<div className="pokedex">
			<div className="pokedex-container" >
				<div className="search-poke">
						<input type="text" placeholder="Search for a Pokémon, e.g: Pikachu" 
					onChange={event => setPokeFilter(event.target.value)}/>
				</div>
			
				<div className="container">
					<div className="pokedex-content">
						{pokemon.filter(poke =>{
							if(pokeFilter == ""){
								return poke
							}
							else if(poke.name.toLowerCase().includes(pokeFilter.toLowerCase())){
								return poke
							}
						}).map(poke => {
							return (
								<Card key={poke.id+poke.name} pokemon={poke} infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} filterPokemon={pokeFilter} setPopUp={setPopUp} />)
								})
						}
					</div>
				</div>
			</div>
			<Pokeinfo data={pokeInfo} party={false} popUp={popUp} setPopUp={setPopUp} pokeList={pokeList} setPokeList={setPokeList} addPokemon={addPokemon}/>
		</div>
	)
}
export default Pokedex