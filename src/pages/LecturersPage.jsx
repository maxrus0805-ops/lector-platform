import { useState } from 'react';
import { lecturers } from '../data/lecturers.js';
import { LecturerCard } from '../components/lecturers/LecturerCard.jsx';
import styles from './LecturersPage.module.css';

export function LecturersPage() {
  const [sort, setSort] = useState('default');

  const sortedLecturers = [...lecturers].sort((a, b) => {
    if (sort === 'default') return 0;
    const diff = a.experienceYears - b.experienceYears;
    return sort === 'asc' ? diff : -diff;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Наши лекторы</h1>

        <div className={styles.filters}>
          <button
            className={sort === 'default' ? styles.active : ''}
            onClick={() => setSort('default')}
          >
            По умолчанию
          </button>
          <button
            className={sort === 'desc' ? styles.active : ''}
            onClick={() => setSort('desc')}
          >
            Стаж: по убыванию
          </button>
          <button
            className={sort === 'asc' ? styles.active : ''}
            onClick={() => setSort('asc')}
          >
            Стаж: по возрастанию
          </button>
        </div>
      </div>

      <div className={styles.list}>
        {sortedLecturers.map(l => (
          <LecturerCard key={l.id} lecturer={l} />
        ))}
      </div>
    </div>
  );
}