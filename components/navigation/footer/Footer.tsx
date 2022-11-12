export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}
import styles from './Footer.module.css';
const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={className}>
      <div className={styles.footer_container}>
        <p>Brazil</p>
      </div>
    </footer>
  );
};

export default Footer;
