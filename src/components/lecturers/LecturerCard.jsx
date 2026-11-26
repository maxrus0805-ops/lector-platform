import { Button } from '../ui/Button.jsx';
import styles from './LecturerCard.module.css';

export function LecturerCard({ lecturer }) {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.topSection}>
        <div className={styles.photoColumn}>
          <div className={styles.photoBox}>
            <img 
              src={lecturer.photoUrl} 
              alt={lecturer.name} 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/220x235?text=Фото'; }} 
            />
          </div>
          <div className={styles.blueLine}></div>
        </div>

        <div className={styles.infoBox}>
          <h3 className={styles.name}>{lecturer.name}</h3>
          <p className={styles.meta}>
            {lecturer.degree !== 'нет' ? lecturer.degree : 'Без ученой степени'}
          </p>
          <p className={styles.meta}>Стаж: {lecturer.experienceYears} лет</p>
          <p className={styles.meta}>{lecturer.education}</p>
        </div>
      </div>

     
      <div className={styles.disciplinesSection}>
        <h4 className={styles.sectionTitle}>Программы обучения:</h4>
        {lecturer.disciplines.map((disc, index) => (
          <div key={index} className={styles.disciplineItem}>
            <h5 className={styles.disciplineTitle}>{disc.title}</h5>
            <p className={styles.disciplineDesc}>{disc.description}</p>
            <ol className={styles.topicsList}>
              {disc.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      
      <div className={styles.tariffsSection}>
        <h4 className={styles.sectionTitle}>Тарифы:</h4>
        <div className={styles.tariffsGrid}>
          {lecturer.tariffs.map((tariff, i) => (
            <div key={i} className={styles.tariffCard}>
              <span className={styles.tariffTitle}>{tariff.title}</span>
              <span className={styles.tariffPrice}>{tariff.price.toLocaleString('ru-RU')} ₽</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}