import React from "react";
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="Блюдо японсской кухни"></img>
      </div>
    </React.Fragment>
  )
}
export default Header;