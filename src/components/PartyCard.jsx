const PartyCard = ({pokemon, infoPokemon, setPopUp}) => {

	const handleClick = (poke) =>{
		setPopUp(true)
		infoPokemon(poke)
	}

	return(
		<> 
			<div className="partycard" 
				onClick={() => handleClick(pokemon)}>
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pokemon.id}.png`} alt={`picture of ${pokemon.name}`} />
				<h3>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h3>
			</div>								
		</>
		)
}
export default PartyCard


