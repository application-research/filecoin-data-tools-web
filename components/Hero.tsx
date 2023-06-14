import styles from '@components/Hero.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import { HOMEPAGE_HERO_CONTENT } from '@root/content/homepage-content';

export default function Hero() {
  const { title, cta, paragraphs } = HOMEPAGE_HERO_CONTENT;

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>

      <div style={{ display: 'flex', gap: '1rem', paddingBottom: '5rem' }}>
        {cta.map((ctaItem, index) => {
          return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
        })}
      </div>

      <p className={`${styles.p} ${styles.paragraphMedium}`} style={{ paddingBottom: '2rem' }}>
        Building out the open source alternative to traditional web2 storage services one service at a time. Filecoin Data Tools uses the power of Filecoin, the world's largest
        decentralized storage network.
      </p>
      {paragraphs.map((item, index) => {
        return (
          <p key={index} className={styles.p}>
            {item.paragraph}
          </p>
        );
      })}
    </div>
  );
}
