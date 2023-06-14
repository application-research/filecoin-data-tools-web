import styles from '@components/LogoGrid.module.scss';

export default function LogoGrid({ id, logos, text }) {
  return (
    <div id={id} className={styles.container}>
      {logos && (
        <div className={styles.col6}>
          {logos.map((logo, index) => {
            return (
              <div key={index} className={styles.column} style={{ width: '3rem', height: '3rem' }}>
                <img className={styles.logo} src={logo.src} alt={logo?.altText ?? ''} />
              </div>
            );
          })}
        </div>
      )}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
