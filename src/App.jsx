import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Party from './components/Party'

function App() {

  return (
    <Router>
				<header>
					<div className="navbar">
						<NavLink to="/"> <FontAwesomeIcon icon={faHouse} /> Home </NavLink>
						<NavLink to="/pokedex"> <FontAwesomeIcon icon={faBook} /> Pokedex </NavLink>
						<NavLink to="/party" > <FontAwesomeIcon icon={faGlobe} /> Party </NavLink>
					</div>
				</header>
			
				<main> 
					<div className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pokedex" element={<Pokedex />} />
						<Route path="/party" element={<Party />} />
						<Route path="/*" element={<Home />} />
					</Routes>
					</div>
				</main>		
	</Router>
  )
}

export default App
