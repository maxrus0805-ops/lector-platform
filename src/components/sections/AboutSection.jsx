import { Link } from '../../router/Link.jsx';
import styles from './AboutSection.module.css';

export function AboutSection({ isPreview = false }) {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>О нас</h2>
      <p className={styles.textBlock}>
        Наша учебная платформа соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, бронирования и организации лекций.
      </p>
      
      {isPreview ? (
        <Link to="/about" className={styles.moreLink}>Подробнее о нас →</Link>
      ) : (
        <div className={styles.audience}>
          <div>Для компаний — корпоративные тренинги</div>
          <div>Для вузов и НКО — подбор спикеров</div>
          <div>Для частных лиц — индивидуальные занятия</div>
        </div>
      )}
    </section>
  );
}