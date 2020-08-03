import React, {useState} from 'react'
import {NavList, Menubar} from '../index'

const NavContent = () => {

  const [move, setMove] = useState(false)

  const Move = () => {
    setMove(!move)
  }

  const toggleActive = move ? "active": ""

  return(
    <div className={"nav-content" + ' ' + (toggleActive)} onClick={() => Move()} >
      <ul>
        <NavList text={"TOP"} href={"#"} />
        <NavList text={"PRODUCT"} href={"#"} />
        <NavList text={"ABOUT"} href={"#"} />
        <NavList text={"NEWS"} href={"#"} />
        <NavList text={"CONTACT"} href={"#"} />
      </ul>
      <Menubar />
    </div>
  )
}

export default NavContent