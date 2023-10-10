

import React, { useState } from 'react';

function Toggle() {
  
  const [Toggled ,setToggled] = useState(true);

  const Toggle = () => {
    setToggled(!Toggled)
  }

  return (
    <div>
       {Toggled && (
        <div>
          <p>Conditionally render content based on the toggle state   </p>
          </div>
       )}
     
      <div>
        <button onClick={Toggle}>
           {Toggled ? 'hidden ': 'show' }
        </button>
      </div>

    </div>
  );
}

export default Toggle;
