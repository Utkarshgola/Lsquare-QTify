import React from 'react'
import styles from './Button.module.css'

function Button({buttontext}) {
  return (
   
      <button className={styles.button}> 
        {buttontext}
      </button>
        
    
  )
}

export default Button