import React, {useState, useEffect, useCallback} from 'react';
import '../assets/styles/style.css';

const Window = () => {

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const openWindow = () => {
    setOpen(true)
  }

  const closeWindow = () => {
    setClose(false)
  }

  const classes = open & close ? 'appear' : 'hide'

  useEffect(() => {
    openWindow()
    setTimeout(() => closeWindow(), 4200)
  },[])

  return(
      <section className={"c-box" + ' ' + (classes)}>
        <p className="c-box-text" > Hello</p>
      </section>
  )
}

export default Window;