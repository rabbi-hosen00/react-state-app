import React,{useEffect, useState} from 'react'

const useFetch = (url) => {
 
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

   useEffect(() => {
       setTimeout(() => {
           fetch(url)
           .then((res) => {
               if(!res.ok){
                   throw Error("fecting is not successful")
               } else {
                   return res.json()
               }
           })
           .then((data) => {
              setData(data);
              setIsLoading(false)
              setError(null)
           })
           .catch((error) => {
               setError(error.message)
               setIsLoading(false)
           })
       }, 2000)
      }, [url]);
      return {data,isLoading, error}
}

export default useFetch
