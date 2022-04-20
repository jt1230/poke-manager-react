import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

const PartyCard = ({pokemon, infoPokemon, setPopUp}) => {

	const handleClick = (poke) =>{
		setPopUp(true)
		infoPokemon(poke)
	}

	const removePoke = (id) => {
		console.log("clicked remove on id: ", id);
	}

	const editPoke = (id) => {
		setPopUp(false)
		console.log("clicked edit on id: ", id);
	}


	return(
		<> 
			<div className="partycard" 
				onClick={() => handleClick(pokemon)}>
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemon.id}.png`} alt={`picture of ${pokemon.name}`} />
				<h3>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h3>
				<div className="hp">
					<div className="hp-bar"></div>
					<h3> {pokemon.stats[0].base_stat} / {pokemon.stats[0].base_stat} </h3>
					
				</div>
			</div>
			<FontAwesomeIcon className="party-edit" icon={faEdit} onClick={() => editPoke(pokemon.id)} />								
			<FontAwesomeIcon className="party-btn" icon={faTimes} onClick={() => removePoke(pokemon.id)} />
		</>
		)
}
export default PartyCard


