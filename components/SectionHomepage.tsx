import styles from '@components/SectionHomepage.module.scss';

import { HOMEPAGE_BLOCKS_CONTENT } from '@root/content/homepage-content';
import BlockBuilder from './BlockBuilder';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function SectionHomepage() {
  const blocks = HOMEPAGE_BLOCKS_CONTENT;

  return (
    <div>
      <Navbar />
      <div className={styles.sidebarDivider}>
        <Sidebar className={styles.col30} />
        <div className={styles.col70}>
          <Hero />

          <div style={{ display: 'grid', rowGap: '7rem' }}>
            {blocks?.map((blockItems, index) => {
              const { block, description, direction, id, title } = (blockItems as any) ?? null;

              return <BlockBuilder block={block} description={description} id={id} title={title} key={index} direction={direction} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
