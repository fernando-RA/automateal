import Image from 'next/image';
import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';
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
      <div className={styles.container}>
        <Link rel="preload" href="/">
          <Image
            src="/automateal_logo2.1.jpeg"
            alt="Logo"
            width={120}
            height={64}
            priority
          />
        </Link>
        <div className={styles.separator_bar}></div>
        {menuItems.map((item) => (
          <Link href="/" key={item} className={styles.menu_icon}>
            {item}
          </Link>
        ))}
      </div>
      <AuthButton></AuthButton>
    </header>
  );
};
export default Header;
