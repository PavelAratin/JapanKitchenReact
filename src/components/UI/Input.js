import styles from './Input.module.css';
import React from 'react';
const Input = React.forwardRef((props,ref) => {
  //{...props.input} пары ключ/значения будут добавлены как пропс в инпут
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  )
});
export default Input;