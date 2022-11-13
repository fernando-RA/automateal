export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}
import styles from './Footer.module.scss';
const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`${className} ${styles.footer_container}`}
    >
      <p>Brazil</p>
    </footer>
  );
};

export default Footer;
