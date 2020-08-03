import React, {useState, useEffect } from 'react';
import './assets/styles/style.css';
import {Window, Header} from './components/index';

const App = () => {

  const [open, setOpen] = useState(false);

  const autoOpen = () => {
    setOpen(true)
  }

  const classes = open ? 'appear' : 'hide'

  useEffect(() => {
    setTimeout(() => autoOpen(), 5000)
  })

  return(
    <section className="c-section">
      <Window />
      <section className={"c-section-wrap"+ ' ' + (classes)}>
        <Header /> 
      </section>
    </section>
  )
}

export default App;
