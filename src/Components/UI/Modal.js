import React, { Fragment } from 'react'
import style from './Modal.module.css'
import ReactDOM from 'react-dom'

const BackDrop=(props)=>{
  return <div className={style.backdrop} onClick={props.onClose}/>
}
const ModalOverlay=(props)=>{
  return <div className={style.modal}>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
}
const portalElement=document.getElementById('overlays');
const Modal=(props)=> {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  )
}

export default Modal;