//first import react
//import React from 'react'
import React from 'react'

//property(props)
const Greet=props=>{
    console.log(props)
    return (<div>
        <h1> Xup {props.name} </h1>,
        {props.children}
    </div>
    )
}


export default Greet
