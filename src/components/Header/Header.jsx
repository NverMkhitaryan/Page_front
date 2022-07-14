import React from 'react'
import { useState } from 'react'
import Order from '../Order/Order'
import Button from '../UI/Button/Button'
import ModalWindow from '../UI/ModalWindow/ModalWindow'
import s from "./Header.module.sass"
import Nav from './Nav/Nav'
import Logo from './Logo/Logo'


export default function Header() {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  
  return (
    <>
    <header className={s.header}>
        <Logo/>
        <Nav/>
        <Button  onClick={()=> setModal(true)} children={"Order Today"}/>
        
    </header>
    {modal && <ModalWindow closeModal={closeModal}>
                           <Order closeModal={closeModal}/>
                  </ModalWindow>}
    </>
  )
}
