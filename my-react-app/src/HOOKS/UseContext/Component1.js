

import React, { useState } from 'react'
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({ id: 101, name: "rabbi hosen"});
    const [text, setText] = useState("hello i am text")
  return (
  <UserContext.Provider value={{user,text}}>
    <Component2 />
    </UserContext.Provider>
  )
}

export default Component1;