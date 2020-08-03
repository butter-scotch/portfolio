import React from 'react';
import { HeaderText, HeaderButton} from './index'

const Header = () => {



  return(
    <header className="header">
      <div className="background-design-1"></div>
      <div className="background-design-2"></div>
      <div className="background-design-3"></div>
      <div className="background-design-4"></div>
      <div className="background-design-5"></div>
      <div className="background-design-6"></div>
      <p className="name"> Shoma Hashimoto</p>
      <section className="header-cover">
        <HeaderText />
      </section>
        <HeaderButton />
      {/* <Nav /> */}
    </header>
  )
}

export default Header