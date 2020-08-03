import React from 'react'
import navigationToggle from '../../assets/img/navigation-toggle@2x.png'

const Menubar = () => {

  return(
    <div className="menubar">
      <div className="menutext">
        MENU
      </div>
      <div className="menuinput">
        <img src={navigationToggle} alt="navigation-toggle" width="15px" />
      </div>
    </div>
  )
}

export default Menubar