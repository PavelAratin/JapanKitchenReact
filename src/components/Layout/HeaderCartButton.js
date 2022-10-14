import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props)=>{
  return(
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>
        2
      </span>
      <span></span>
    </button>
  )
}

export default HeaderCartButton;