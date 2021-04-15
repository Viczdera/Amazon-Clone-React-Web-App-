import React from 'react'

//create the function that returns jsx/html

const Hello= ()=>{
   // return(
  //  <div className= 'helloclass'>
   //     <h1>Xup. Jsx Hello</h1>
   // </div>
  //  )


  //now without using jsx
  return React.createElement('div', 
  {id:'hello' ,className:'helloclass'}, 
  React.createElement ('h1',null, 'hey jsxx')
  )
}
export default Hello