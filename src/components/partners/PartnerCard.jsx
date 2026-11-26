import styles from './PartnerCard.module.css';

export function PartnerCard({ partner }) {
  return (
    <a className={styles.card} href={partner.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.topRow}>
        <img className={styles.logo} src={partner.logoUrl} alt={partner.name} />
        <span className={styles.arrow} aria-hidden="true">↗</span>
      </div>
      <p className={styles.description}>{partner.description}</p>
    </a>
  );
}