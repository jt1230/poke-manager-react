import { useState, useEffect, Fragment } from "react"
import Pokeinfo from "./Pokeinfo"

const Party = () => {
	const [pokeParty, setPokeParty] = useState([])
	const [loading, setLoading] = useState(true)
	const [partyUrl, setpartyUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=3')
	const [pokeInfo, setPokeInfo] = useState(null)


	const getPokePartyData = async() => {
		setLoading(true)
		const response = await fetch(partyUrl)
		let data = await response.json()
		getPokemon(data.results)
		setLoading(false)
	}

	const getPokemon = async(response) => {
		// console.log("getPokemon(response): ", response);  //! CONSOLE.LOG
		
		response.map(async(pokemon) =>{
			const result = await fetch(pokemon.url)
			let data = await result.json()
			// console.log("Response.map: ", data)  //! CONSOLE.LOG
			setPokeParty(element => {
				element = [...element, data]
				element.sort((a, b) => a.id - b.id)
				return element
			})
		})
	}

	useEffect(() => {
		getPokePartyData()
		

	}, [partyUrl])

	return(
		<div className="pokedex">
			{pokeParty.map(poke =>{
						return(
							<Fragment key={poke.id+poke.name} > 
								<div className="card" 
									onClick={() => setPokeInfo(poke)}>
									<h3>#{poke.id}</h3>
									<img src={poke.sprites.front_default} alt="" />
									<h3>{poke.name[0].toUpperCase()+poke.name.substring(1)}</h3>
								</div> 
								<div className="right-content">
									<Pokeinfo data={pokeInfo} party={true} />
								</div>								
							</Fragment>
							)}
			)}
					
		</div>
	)
}
export default Party