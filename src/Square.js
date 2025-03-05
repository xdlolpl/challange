const Square =( {colorValue} )=>{
    return ( 
        <section
            className="square"
            style={{ backgroundColor: colorValue }}>
                <p>{colorValue ? colorValue: "Pusta wartość"}</p>
           
        </section>
    )
}

export default Square;