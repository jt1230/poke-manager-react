import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faGlobe, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Party from './components/Party'

function App() {

	const [pokeData, setPokeData] = useState([])
	const [pokeList, setPokeList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'

	useEffect(async() => {
		setIsLoading(true)
		const response = await fetch(url) 
		let data = await response.json()
		setPokeData(data.results)
		setIsLoading(false)

	}, [])

	const addPokemon = (data) => {
		const newPoke = data
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
								<Route path="/pokedex" element={<Pokedex pokeData={pokeData} pokeList={pokeList} setPokeList={setPokeList} addPokemon={addPokemon} />} />
								<Route path="/party" element={<Party pokeData={pokeData} pokeList={pokeList} setPokeList={setPokeList}/>} />
								<Route path="/*" element={<Home />} />
							</Routes>}
					</div>
				</main>	
		</Router>
	)
}
export default App
