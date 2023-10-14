import React, {useState} from 'react';


import style from "./faq.module.css";

const FAQ = ({id, title, desc }) => {

    const [toggle, setTogole] = useState(false)

  return (
    <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button 
            onClick={()=> {
                setTogole(!toggle)
                }}
                >
                {toggle ? '-' : '+'} 
            </button>
        </div>
       {toggle && <p>{desc}</p>}
    </article>
  )
}

export default FAQ
