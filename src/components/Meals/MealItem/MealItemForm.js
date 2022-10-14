import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';
const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Колическтво"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}>
      </Input>
      <button>Добавить</button>
    </form>
  )
}

export default MealItemForm;