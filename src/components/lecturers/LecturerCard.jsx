import { useState } from 'react';
import { Button } from '../ui/Button.jsx';
import { LecturerModal } from './LecturerModal.jsx';
import styles from './LecturerCard.module.css';

export function LecturerCard({ lecturer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className={styles.cardWrapper}>
        <div className={styles.topSection}>
          <div className={styles.photoColumn}>
            <div className={styles.photoBox}>
              <img
                src={lecturer.photoUrl}
                alt={lecturer.name}
                onError={(event) => {
                  event.currentTarget.src = 'https://via.placeholder.com/220x235?text=Фото';
                }}
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

        <Button type="button" onClick={() => setIsModalOpen(true)}>
          Подробнее
        </Button>
      </article>

      {isModalOpen && (
        <LecturerModal
          lecturer={lecturer}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
