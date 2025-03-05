const Square =( {colorValue} )=>{
    return ( 
        <section
            className="square"
            style={{ backgroundColor: colorValue }}>
                <p>{colorValue ? colorValue: "Nic tu nie ma hahahahahha"}</p>
           
        </section>
    )
}

export default Square;