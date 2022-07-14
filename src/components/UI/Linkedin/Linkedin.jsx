import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import s from "./Linkedin.module.sass"


export default function Linkedin({className}) {
    const element = <FontAwesomeIcon icon={faLinkedinIn}/>
    const classes = s.brands + " " + s.in_top;
    const classes_footer = s.brand_footer + " " + s.in_footer;

  return (
    <div className={(className === "top" ? classes : classes_footer)}>
        <a href='www.linkedin.com' target={"_blank"}>{element}</a>
    </div>
  )
}
