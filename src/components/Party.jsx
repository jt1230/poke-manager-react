import { useRef, useState, useEffect } from 'react'
import PartyCard from './PartyCard'
import Pokeinfo from './Pokeinfo'



const Party = ({pokeData, pokeList, setPokeList}) => {

	const [name, setName] = useState([])
	const [pokeInfo, setPokeInfo] = useState(null)
	const [popUp, setPopUp] = useState(false)
	

	useEffect(() =>{
		const getFetchedPokemon = async(response) => {
			response.map(async(pokemon) =>{
				const result = await fetch(pokemon.url)
				let data = await result.json()
	
				setPokeList(element => {
					element = [...element, data]
					return element
				})
			})
		}
		getFetchedPokemon(pokeData.slice(3,6))
	}, [])

	return(
		<>
			{<div className="party">
				<div className="party-header" >
					<h3>Party Land </h3>
					<p>Watch your current party set up. Here you can rename your pokemons and chose to release them back to the wild. To start you up, we have chosen to give you a family of fire-breathing chars.  </p>
				</div>
				<div className="party-pokes">
					<div className="party-content">
						{pokeList.length <= 0 ? <p>Oh, my ... Looks quite empty in here. You should go and catch some pokemon to light up the party!</p> : 
							pokeList.map(poke => {return (<PartyCard key={poke.id} pokemon={poke} infoPokemon={pokeInfo => setPokeInfo(pokeInfo)} setPopUp={setPopUp} />)})}
				</div>
					</div>
				<Pokeinfo data={pokeInfo} popUp={popUp} setPopUp={setPopUp} party={true}/>
			</div>}
		</>
	)
}
export default Party