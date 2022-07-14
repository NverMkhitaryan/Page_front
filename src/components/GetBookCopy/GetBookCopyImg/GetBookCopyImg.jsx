import React from 'react'
import s from "./GetBookCopyImg.module.sass"
import getBook from './../../../media/getBook.png'


export default function GetBookCopyImg() {
  return (
    <div className={s.get_book_copy_img}>
      <img src={getBook} alt="getBook"/>
    </div>
  )
}
