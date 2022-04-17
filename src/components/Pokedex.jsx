import { useState, useEffect } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'


const Pokedex = () => {
	const [pokeData, setPokeData] = useState([])
	const [loading, setLoading] = useState(true)
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000')
	const [pokeInfo, setPokeInfo] = useState(null)
	const [pokeFilter, setPokeFilter] = useState('')
	const [popUp, setPopUp] = useState(false)
	


	const getPokeData = async() => {
		setLoading(true)
		const response = await fetch(url)
		let data = await response.json()
		// console.log("getPokeData - data: ", data) //! CONSOLE.LOG
		getPokemon(data.results)
		setLoading(false)
	}

	const getPokemon = async(response) => {
		// console.log("getPokemon(response): ", response);  //! CONSOLE.LOG
		
		response.map(async(pokemon) =>{
			const result = await fetch(pokemon.url)
			let data = await result.json()

			setPokeData(element => {
				element = [...element, data]
				element.sort((a, b) => a.id - b.id)
				return element
			})
		})
	}

	useEffect(() => {
		getPokeData()

	}, [url])

	return(
		<div className="pokedex">
			<div className="pokedex-container" >
				<div className="search-poke">
						<input type="text" placeholder="Search for a Pokémon, e.g: Pikachu" 
					onChange={event => setPokeFilter(event.target.value)}/>
				</div>
			
				<div className="container">
					<div className="pokedex-content">
						<Card pokemon={pokeData} loading={loading} infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} 
							filterPokemon = {pokeFilter} setPopUp={setPopUp} />
					</div>
				</div>
			</div>
			<Pokeinfo data={pokeInfo} party={false} popUp={popUp} setPopUp={setPopUp}/>
		</div>
	)
}
export default Pokedex