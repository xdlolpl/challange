const Input =({ colorValue, setColorValue })=>{
    return ( 
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Add Color Name:</label>
            <input 
                type="text"
                placeholder="Wprowadź nazwę koloru użytkowniku"
                required
                value={colorValue}
                onChange={(e)=> setColorValue(e.target.value)}
            />
        </form>
    )
}

export default Input;