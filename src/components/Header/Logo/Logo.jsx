import React from 'react'
import Social from '../Social/Social'
import logoBook from "./../../../media/logoBook.png"
import logoPages from "./../../../media/logoPages.png"
import s from "./Logo.module.sass"

export default function Logo() {
  return (
    <div className={s.logo}>
        <img src={logoBook} alt="book" />
        <img src={logoPages} alt="book" className={s.page}/>
        <Social/>
    </div>
  )
}
