import React from 'react'

const NavList = (props) => {

  // const a = document.createElement('a')
  
  return(
    <>
      <li>
        <a href={props.href}>{props.text}</a>
      </li>
    </>
  )
}

export default NavList