import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './LecturerModal.module.css';

export function LecturerModal({ lecturer, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement?.focus?.();
    };
  }, [onClose]);

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lecturer-modal-title"
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ×
        </button>

        <header className={styles.header}>
          <h2 id="lecturer-modal-title">{lecturer.name}</h2>
          <p>{lecturer.degree !== 'нет' ? lecturer.degree : 'Без ученой степени'}</p>
          <p>Стаж: {lecturer.experienceYears} лет</p>
          <p>{lecturer.education}</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h3>Программы обучения</h3>
            {lecturer.disciplines.map((discipline, index) => (
              <article className={styles.discipline} key={`${discipline.title}-${index}`}>
                <h4>{discipline.title}</h4>
                <p className={styles.description}>{discipline.description}</p>
                <ol>
                  {discipline.topics.map((topic, topicIndex) => (
                    <li key={`${topic}-${topicIndex}`}>{topic}</li>
                  ))}
                </ol>
              </article>
            ))}
          </section>

          <section className={styles.section}>
            <h3>Тарифы</h3>
            <div className={styles.tariffs}>
              {lecturer.tariffs.map((tariff, index) => (
                <div className={styles.tariff} key={`${tariff.title}-${index}`}>
                  <span>{tariff.title}</span>
                  <strong>{tariff.price.toLocaleString('ru-RU')} ₽</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>,
    modalRoot,
  );
}
