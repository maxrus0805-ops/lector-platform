import styles from './Button.module.css';

export function Button({ variant = 'primary', size = 'md', onClick, children, ...rest }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}