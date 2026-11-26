import { Button } from '../ui/Button.jsx';
import { useRouter } from '../../router/Router.jsx';
import styles from './Hero.module.css';

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.photo}>
        <img
          src="/images/hero-teacher.jpg"
          alt="Преподаватель на занятии"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.text}>
          Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
        </h1>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/lecturers')}
            aria-label="Перейти к списку лекторов"
          >
            НАЙТИ ЛЕКТОРА
          </Button>
          <Button variant="primary" size="lg" onClick={() => navigate('/about')}>
            О НАС
          </Button>
          <Button variant="primary" size="lg" onClick={() => navigate('/partners')}>
            НАШИ ПАРТНЕРЫ
          </Button>
        </div>
      </div>
    </section>
  );
}