import React from 'react'
import propTypes from 'prop-types'


const User = (props) => {
  return (
  <div>
    <h1>{props.userName}</h1>
    <h3> {props.userId}</h3>
  </div>
  )
}
User.propTypes ={
    userName : propTypes.string,
    userId : propTypes.number
}
User.defaultProps ={
    userName : "default name",
    userId : 34
}

export default User
