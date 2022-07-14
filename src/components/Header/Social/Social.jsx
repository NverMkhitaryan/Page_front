import React from 'react'
import Facebook from '../../UI/Facebook/Facebook'
import Twitter from '../../UI/Twitter'
import Linkedin from '../../UI/Linkedin'
import s from "./Social.module.sass"

export default function Social() {
  return (
    <div className={s.social}>
        <Facebook className={"top"}/>
        <Twitter className={"top"}/>
        <Linkedin className={"top"}/>
    </div>
  )
}
