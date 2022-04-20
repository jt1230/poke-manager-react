const Card = ({pokemon, infoPokemon, setPopUp}) => {

	const handleClick = (poke) =>{
		setPopUp(true)
		infoPokemon(poke)
	}

	return(
		<> 
			<div className="card" 
				onClick={() => handleClick(pokemon)}>
				<h3>#{pokemon.id}</h3>
				<h3>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h3>
				<img src={pokemon.sprites.front_default } alt={`picture of ${pokemon.name}`} />
			</div>								
		</>
	)
}
export default Card
