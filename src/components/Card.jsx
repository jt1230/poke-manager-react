import './Card.css'
import { pokeNumber } from './poke-number'
import { capitalize } from './capitalize'

const Card = ({pokemon, infoPokemon, setPopUp}) => {

	const handleClick = (poke) =>{
		setPopUp(true)
		infoPokemon(poke)
	}

	return(
		<> 
			<section className='card' 
				onClick={() => handleClick(pokemon)}>
				<p>#{pokeNumber(pokemon.id)}</p>
				<h3>{capitalize(pokemon.name)}</h3>
				<img src={pokemon.sprites.front_default } alt={`picture of ${pokemon.name}`} />
				<div className='types' >{
					pokemon.types.map(poke => {
						return(
							<div className={`type ${poke.type.name}`} key={poke.id + poke.type.name}></div>
						)
					})
				}</div>	
			</section>								
		</>
	)
}
export default Card