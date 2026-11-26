import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Учебная платформа</p>
        <p>Онлайн и оффлайн занятия для физических и юридических лиц</p>
      </div>
    </footer>
  );
}