import React, { useState } from 'react'
import User from './User'

const Users = () => {

const [userName, setUserName]= useState()
const [userId, setUserId] = useState(23)

  return <>
    <User userName={userName} userId= {userId}/>
  </>
}

export default Users;
