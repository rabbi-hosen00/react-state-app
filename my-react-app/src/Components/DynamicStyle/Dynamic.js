import React, { useEffect, useState } from 'react'


import "./Dynamic.css"

const Dynamic = () => {

 const [name, setName] = useState("")
 const [validInput, setValidInput] = useState(true)

  useEffect (() => {
    
    if(name.length <3 ) {
        setValidInput(false)
    }else {
        setValidInput(true)
    }

  }, [name])


  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input
       type='text'
       value={name}
       onChange={handleChange}
       className={`${validInput ? "valid" : "invalid"}`}
       />
    </div>
  )
}

export default Dynamic
