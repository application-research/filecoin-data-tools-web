import styles from '@components/SectionHomepage.module.scss';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';

export default function SectionHomepage() {
  return (
    <div>
      <Navbar />
      <div className={styles.sidebarDivider}>
        <Sidebar className={styles.col30} />
        <div className={styles.col70}>
          <Hero />
        </div>
      </div>
    </div>
  );
}
