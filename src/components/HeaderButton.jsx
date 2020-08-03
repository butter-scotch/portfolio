import React,{useState, useCallback} from 'react'
import {AsideButton} from './index'
import {faStamp} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {FormDialog} from './index'

const HeaderButton = () => {

  const[open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen])

  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen])

  return(
    <div className="buttons">
      <AsideButton class={'button icon'} icon={faBook} text=" blog" alt="blog" href="https://note.com/butterscotch" />
      <AsideButton class={'button icon'} icon={faDesktop} text=" code" alt="github" href="https://github.com/butter-scotch" />
      <AsideButton class={`button icon`} icon={faStamp} text=" stamp" alt="line-stamp" href="https://store.line.me/stickershop/product/10991137/ja" />
      {/* <AsideButton class={'button icon'} icon={faEnvelope} text=" contact" alt="contact" >
        <FormDialog />
      </AsideButton> */}
      <FormDialog open={open} handleClose={handleClose} handleOpen={handleOpen}/>
    </div>
  )
}

export default HeaderButton