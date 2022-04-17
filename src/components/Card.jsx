import { Fragment } from "react"

const Card = ({pokemon, loading, infoPokemon, filterPokemon, setPopUp}) => {
	//console.log(pokemon);  //!TODO - CONSOLE.LOG

	const handleClick = (poke) =>{
		console.log("click");
		setPopUp(true)
		infoPokemon(poke)
	}

	return(
		<>
			{
				loading ? <h1>Loading...</h1> :
				pokemon.map(poke =>{
						return(
							<Fragment key={poke.id+poke.name} > 
								{poke.name.includes(filterPokemon) && <div className="card" 
									onClick={() => handleClick(poke)}>
									<h3>#{poke.id}</h3>
									<img src={poke.sprites.front_default } alt="" />
									<h3>{poke.name[0].toUpperCase()+poke.name.substring(1)}</h3>
								</div> }								
							</Fragment>
							)
					})
			}

		</>
	)
}
export default Card
