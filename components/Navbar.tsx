import styles from '@components/Navbar.module.scss';

import { NAVBAR_ITEMS_CONTENT } from '@root/content/navigation-content';
import FdtLogo from './svg/FdtLogo';
import GutterContainer from './GutterContainer';

export default function Navbar() {
  const navbarItems = NAVBAR_ITEMS_CONTENT;

  return (
    <GutterContainer>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <FdtLogo />
        </div>

        <div className={styles.navItems}>
          {navbarItems?.map((navItem, index) => {
            return <p key={index}>{navItem.itemName}</p>;
          })}
        </div>
      </nav>
    </GutterContainer>
  );
}
