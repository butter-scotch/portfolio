import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const AsideButton = (props) => {

  return(
    <a 
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={props.class} type="button">
        <FontAwesomeIcon icon={props.icon} />
          {props.text}
      </button>
    </a>
  )
}

export default AsideButton