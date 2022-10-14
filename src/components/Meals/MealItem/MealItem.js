import styles from './MealItem.module.css'

const MealItem = (props) => {
  const formatterPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatterPrice}</div>
      </div>
      <div>

      </div>
    </li>
  )

}
export default MealItem;