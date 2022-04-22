import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Party from './components/Party'

function App() {

	const [pokeData, setPokeData] = useState([])
	const [pokemon, setPokemon] = useState([])
	const [pokeList, setPokeList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'


	useEffect(() => { 
		const getPokemons = async() => {
			const response = await fetch(url) 
			let data = await response.json()
			setPokeData(data.results)
			setIsLoading(false)
		}
		getPokemons()

	}, [])

	useEffect(() => {
		if(pokeData == null)
			return
		else{
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
		}

	}, [pokeData])

	useEffect(() =>{
		if(pokeData == null)
			return
		else{
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
		getFetchedPokemon(pokeData.slice(24,25))}
	}, [pokeData])


	const addPokemon = (poke) => {
		let newPoke = {party_id: ""}
		newPoke = {...poke, party_id : "partyTeam" + pokeList.length}
		setPokeList( pokemon => [...pokemon, newPoke])
		return pokeList
	}

	return(
		<Router>
				<header>
					<div className="navbar">
						<NavLink to="/"> <FontAwesomeIcon icon={faHouse} /> Home </NavLink>
						<NavLink to="/pokedex"> <FontAwesomeIcon icon={faBook} /> Pokedex </NavLink>
						<NavLink to="/party" > <FontAwesomeIcon icon={faUserFriends} /> Party </NavLink>
					</div>
				</header>
			
				<main> 
					<div className="main-content">
					{	isLoading? <Home /> :	
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/pokedex" element={<Pokedex pokemon={pokemon} pokeList={pokeList} setPokeList={setPokeList} addPokemon={addPokemon} />} />
								<Route path="/party" element={<Party pokeData={pokeData} pokeList={pokeList} setPokeList={setPokeList}/>} />
								<Route path="/*" element={<Home />} />
							</Routes>}
					</div>
				</main>	
		</Router>
	)
}
export default App