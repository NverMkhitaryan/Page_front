import React from 'react'
import s from "./FooterSocial.module.sass"
import logoBook from "./../../../media/logoBook.png"
import logoPages from "./../../../media/logoPages.png"
import Facebook from '../../UI/Facebook/Facebook'
import Twitter from '../../UI/Twitter'
import Linkedin from '../../UI/Linkedin'
import Instagram from '../../UI/Instagram'

export default function FooterSocial() {

  return (
    <div className={s.footer_social}>
      <div className={s.logo}>
        <img src={logoBook} alt="logo" />
        <img src={logoPages} alt="logo" />
      </div>

      <div className={s.social}>
        <Facebook/>
        <Twitter/>
        <Linkedin/>
        <Instagram/>
      </div>

    </div>
  )
}
