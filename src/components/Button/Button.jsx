import React from 'react'
import styles from './Button.module.css'

function Button({buttontext}) {
  return (
    <div className={styles.button}>
        {buttontext}
    </div>
  )
}

export default Button