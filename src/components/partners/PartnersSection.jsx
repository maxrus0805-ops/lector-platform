import { partners } from '../../data/partners.js';
import { PartnerCard } from './PartnerCard.jsx';
import styles from './PartnersSection.module.css';

export function PartnersSection() {
  return (
    <section className={styles.partners}>
      {partners.map((p) => <PartnerCard key={p.id} partner={p} />)}
    </section>
  );
}