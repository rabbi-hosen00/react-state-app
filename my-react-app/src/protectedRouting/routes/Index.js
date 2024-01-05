import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NabBar from '../layout/NabBar';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Protected from './Protected';


const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(false)

  return <BrowserRouter>
         <NabBar />
         {isLogedIn ?(
             <button 
               onClick={() =>{
                 setIsLogedIn(!isLogedIn)
            }}
           >
         Log Out
      </button>
         ) : (
         <button
         onClick={() =>{
            setIsLogedIn(!isLogedIn)
       }}
         >
         Log In
      </button>) }
     <Routes>
        <Route path='/' element = {<Home />}/>
        <Route 
           path='/add-blog' 
           element = {
              <Protected isLogedIn={isLogedIn}> 
             <AddBlog />
            </Protected> 
          } 
        />
        <Route path='/about' element = {<About />}/>
        <Route path='/*' element = {<Error />}/>
     </Routes>
  </BrowserRouter>
  
}

export default Index;

