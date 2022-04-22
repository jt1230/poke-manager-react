import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'
import { capitalize } from './capitalize'
import './PartyCard.css'

const PartyCard = ({pokemon, infoPokemon, setPopUp, removePoke, editPoke, pokeList}) => {
	
	const handleClick = (poke) =>{
			setPopUp(true)
			infoPokemon(poke)
	}

	const handleEdit = (event, poke) => {
		event.stopPropagation()
		editPoke(poke)
	}

	const handleRemove = (event, poke) => {
		event.stopPropagation()
		removePoke(poke)
	}

	return(
		<> 
			<div className='partycard' onClick={() => handleClick(pokemon)}>
				<img src={pokemon.sprites.versions['generation-vii'].icons.front_default}  alt={`Miniature of ${pokemon.name}`} />
				<h3>{capitalize(pokemon.name)}</h3>
				<div className='hp'>
					<div className='hp-bar'></div>
					<h3> {pokemon.stats[0].base_stat} / {pokemon.stats[0].base_stat} </h3>	
				</div>
				<FontAwesomeIcon className='party-edit 'icon={faEdit} onClick={event => handleEdit(event, pokemon.party_id)} />			
				<FontAwesomeIcon className='party-btn' icon={faTimes} onClick={event => handleRemove(event, pokemon.party_id)} />
			</div>
		</>
		)
}
export default PartyCard
