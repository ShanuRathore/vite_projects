import styles from './Button.module.css'

function Button({isOutline,text,icon,...rest}) {
  return (
    <button 
          className={isOutline ? styles.outline_btn : styles.primary_btn}
          {...rest}
          >

        {icon}
        {text}
    </button>
  )
}

export default Button
