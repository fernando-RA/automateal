import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const menuItems = [
    'Our Story',
    'Philosophy',
    'Resources',
    'Free Case Study',
    'Reviews',
  ];

  return (
    <header {...headerProps} className={`${styles.wrapper} ${styles.header}`}>
      <div id="header" className={styles.container}>
        <Link rel="preload" href="/">
          <Logo />
        </Link>
        <div className={styles.separator_bar}></div>
      </div>
      <div className={`${styles.navigation_items}`}>
        {menuItems.map((item) => (
          <Link href="/" key={item} className={styles.menu_icon}>
            {item}
          </Link>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.separator_bar}></div>
        <AuthButton></AuthButton>
      </div>
    </header>
  );
};
export default Header;
