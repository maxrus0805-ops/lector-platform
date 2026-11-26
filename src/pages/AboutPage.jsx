import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>О нас</h1>
        <p className={styles.mainText}>
          Мы — площадка, где встречаются те, кто хочет учиться, и те, кто умеет
          учить. Компании, вузы и некоммерческие организации находят здесь
          лекторов, спикеров и тренеров, а мы берём на себя подбор, бронирование
          и организацию — от первого запроса до проведённого занятия.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>С кем мы работаем</h2>
        <div className={styles.audienceRow}>
          <article className={styles.audienceCard}>
            <span className={styles.audienceIndex}>A</span>
            <h3 className={styles.audienceTitle}>Компании и команды</h3>
            <p className={styles.audienceText}>
              Собираем корпоративные программы под вашу задачу: от финансовой
              грамотности и цифровых навыков до деловых коммуникаций. Содержание
              и глубину настраиваем под состав команды.
            </p>
          </article>
          <article className={styles.audienceCard}>
            <span className={styles.audienceIndex}>B</span>
            <h3 className={styles.audienceTitle}>Вузы и НКО</h3>
            <p className={styles.audienceText}>
              Ищем спикеров для открытых лекций, студенческих конференций и
              социальных проектов. Подбор идёт от темы и аудитории, а не от
              готового списка.
            </p>
          </article>
          <article className={styles.audienceCard}>
            <span className={styles.audienceIndex}>C</span>
            <h3 className={styles.audienceTitle}>Частные слушатели</h3>
            <p className={styles.audienceText}>
              Помогаем найти наставника под личную цель: подготовка к экзаменам
              и олимпиадам или освоение новой профессии с нуля.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как устроен путь к занятию</h2>
        <ol className={styles.process}>
          <li className={styles.processStep}>
            <span className={styles.processBadge}>01</span>
            <div className={styles.processBody}>
              <h4 className={styles.processTitle}>Формулируем запрос</h4>
              <p className={styles.processText}>
                Вы описываете тему, формат и аудиторию — мы задаём уточняющие
                вопросы, чтобы запрос стал конкретным.
              </p>
            </div>
          </li>
          <li className={styles.processStep}>
            <span className={styles.processBadge}>02</span>
            <div className={styles.processBody}>
              <h4 className={styles.processTitle}>Собираем короткий список</h4>
              <p className={styles.processText}>
                В ответ приходят 2–3 профиля лекторов с подходящим опытом — можно
                сравнить и выбрать.
              </p>
            </div>
          </li>
          <li className={styles.processStep}>
            <span className={styles.processBadge}>03</span>
            <div className={styles.processBody}>
              <h4 className={styles.processTitle}>Проводим занятие</h4>
              <p className={styles.processText}>
                Онлайн или офлайн, в согласованное время и в удобном месте —
                организацию берём на себя.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}