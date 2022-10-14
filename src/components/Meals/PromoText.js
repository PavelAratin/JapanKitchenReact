import styles from './PromoText.module.css';
const PromoText = () => {
  return (
    <section className={styles['promo-text']}>
      <h1>Онлайн Суши Ресторан Япона Кухня</h1>
      <p>Япона Кухня - онлайн суши-бар, в котором любимые суши и сашими, роллы и другие блюда
        национальной япоснской кухни делает команда профессиональных поваров.
      </p>
    </section>
  )
}

export default PromoText;