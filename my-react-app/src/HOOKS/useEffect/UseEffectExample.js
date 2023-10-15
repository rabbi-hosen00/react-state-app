import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

   const [count, setCount] = useState(0);
   const [isLoding, setIsLoding] = useState(false)

   useEffect (() =>{
    // if we don't use dependency[], calles with every randering;
    // if we  use dependency[], calls with only first randering;
    // if we  use dependency[count], calles with first render and depend on count state;
    console.log("useEffect")
   }, [count]);

  return (
    <div>
        {console.log("rendering")}
      <h1> Count: {count} </h1>
      <button 
      onClick={()=> { 
      setCount( count => count +1 )
      }}
      >
        +
      </button>
      <button 
         onClick={()=>{
            setIsLoding(!isLoding)
         }}> 
      isLoding
      </button>
    </div>
  )
}

export default UseEffectExample;
