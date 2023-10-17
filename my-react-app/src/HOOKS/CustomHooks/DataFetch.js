import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'




const DataFetch = () => {
   
    const {data,error, isLoading} = useFetch("https://jsonplaceholder.typicode.com/todos")
    
       const loadingMessage = <p> Todos is loading </p>
       const errorMessage = <p>{error}</p>

    const todosElement =
    data && 
       data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>
      })
     
     
  return (
    <div>
      <h1> Todos</h1>
      {error && errorMessage}
       {isLoading && loadingMessage}
       {todosElement}
    </div>
  )
}

export default DataFetch