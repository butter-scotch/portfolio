import React, {useState } from 'react'
import {useTrail, animated } from 'react-spring'
import useInterval from 'use-interval'


const HeaderText = () => {

  const items = ['M','Y',' ','P','O','R','T',' ','F','O','L','I','O']
  const config ={mass: 5, tension: 2000, friction: 200}
  const [toggle, setToggle] = useState(true)

  const Toggle = () => {
    setToggle(!toggle)
  }

  const trails = useTrail(items.length, {
    config,
    // height: toggle ? 80 : 0,
    // opacity: toggle ? 1 : 0,
    transform: toggle ? 'rotateX(0deg)' : 'rotateX(180deg)',
    // x: toggle ? 0 : 100,
    // from: { opacity: 1},
    color: toggle ? '#55b9f3' : '#f3a153',
  })

  useInterval(() => {
    Toggle()
  }, 10000)

  return(
    <h1 className="header-main">
      <div>
        {trails.map(({...trails}, index) => (
          <animated.div  
            // key={items[index]}
            key={index}
            className="header-text"
            style={{...trails, height: 0}}
          >
            <animated.div style={{...trails, height: 0, marginLeft: (index-6) * 50}} >
                {items[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </h1>
  )
}

export default HeaderText