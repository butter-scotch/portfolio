import React, {useState, useCallback} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {TextInput} from '../index'

const FormDialog = (props) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  const inputName = useCallback((event) => {
    setName(event.target.value)
  },[setName])

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail])

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  },[setDescription])

  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
  }

  const validateRequireInput = (...args) => {
    let isBlank = false
    for (let i = 0; i < args.length; i = (i+1)|0){
      if(args[i] === ''){
        isBlank = true
      }
    }
    return isBlank
  }
  

  const submitform = () => {

    const isBlank = validateRequireInput(name, email, description)
    const isValidateEmail = validateEmailFormat(email)

    if(isBlank){
      alert('必須入力欄が空欄です')
      return false
    }else if(!isValidateEmail){
      alert('メールアドレスの書式が異なります')
      return false
    }else{
      const payload = {
        text: 'お問い合わせがありました\n' +
              'お名前：' + name + '\n' +
              'Email：'+ email + '\n' +
              '問い合わせ内容：' + description
      }
  
      // webhook URLを記載
      const url = ''
  
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('送信が完了しました。追ってご連絡します！')
        setName("")
        setEmail("")
        setDescription("")
        return props.handleClose()
      })

    }
    

  }


  return(
    <>
    <button className="button icon" type="button" onClick={props.handleOpen}>
      <FontAwesomeIcon icon={faEnvelope} />
          contact
    </button>
      <Dialog
        open={props.open} 
        onClose={props.handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">お問い合わせ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ご用件をお書きください。
          </DialogContentText>
          <TextInput 
            label={"お名前（必須）"}
            multiline={false}
            rows={1}
            value={name}
            type={"text"}
            onChange={inputName}
          />
          <TextInput 
            label={"メールアドレス（必須）"}
            multiline={false}
            rows={1}
            value={email}
            type={"email"}
            onChange={inputEmail}
          />
          <TextInput 
            label={"お問い合わせ内容（必須）"}
            multiline={true}
            rows={5}
            value={description}
            type={"description"}
            onChange={inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={submitform} color="primary" >
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FormDialog