import React from 'react'
import "./loader.scss";

const Loader = ({open}) => {
    return (
        <div>
            {open ?
              <div className="spinner-overlay">
              <div class="loader"></div>
          </div>
          : null
            }
        </div>
      
    )
}

export default Loader