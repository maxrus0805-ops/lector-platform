import { Link } from '../../router/Link.jsx';
import { useRouter } from '../../router/Router.jsx';
import { Button } from '../ui/Button.jsx';
import styles from './Header.module.css';

const ITEMS = [
  { label: 'Главная', href: '/' },
  { label: 'Партнеры', href: '/partners' },
  { label: 'О нас', href: '/about' },
  { label: 'Лекторы', href: '/lecturers' },
];

export function Header() {
  const { path, navigate } = useRouter();
  return (
    <div className={styles.navPanel}>
      <header className={styles.headerBar}>
        {/* Слева — текстовые ссылки */}
        <nav className={styles.menu}>
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.navLink} ${path === item.href ? styles.active : ''}`}
              aria-current={path === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* По центру — логотип */}
        <Link to="/" className={styles.logo}>Lector.com</Link>

        {/* Справа — кнопка */}
        <div className={styles.headerRight}>
          <Button variant="primary" size="md" onClick={() => navigate('/contacts')}>
            Записаться
          </Button>
        </div>
      </header>
    </div>
  );
}