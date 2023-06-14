import styles from '@components/Sidebar.module.scss';
import { SIDEBAR_HOMEPAGE_CONTENT } from '@root/content/homepage-content';

export default function Sidebar(className, props) {
  const navItems = SIDEBAR_HOMEPAGE_CONTENT;

  return (
    <div className={`${styles.sidebar} ${className}`} {...props}>
      {navItems.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
