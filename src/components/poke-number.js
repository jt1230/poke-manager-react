const pokeNumber = (number) => {
    if(number > 99)
        return number
    else if(number <= 99 && number > 9)
        return `0${number}`
    else
        return `00${number}`
}
export { pokeNumber }