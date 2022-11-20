import Link from 'next/link';
import AuthButton from '../../buttons/AuthButton/AuthButton';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const menuItems = ['Features', 'Why InsideSalesTurbo', 'Pricing'];

  return (
    <header
      {...headerProps}
      id="header"
      className={`${styles.wrapper} ${styles.header}`}
    >
      <div className={styles.container}>
        <Link rel="preload" href="/">
          <Logo />
        </Link>
      </div>
      <div className={`${styles.navigation_items}`}>
        {menuItems.map((item) => (
          <Link
            href={`/#${item.split(' ')[0]}`}
            key={item}
            className={styles.menu_icon}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className={styles.container}>
        <AuthButton></AuthButton>
      </div>
    </header>
  );
};
export default Header;
