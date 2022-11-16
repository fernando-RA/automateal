import { useRouter } from 'next/router';
import { ArrowBendRightUp } from 'phosphor-react';
import styles from './Footer.module.scss';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

type FooterLinkObject = { label: string; url: string };

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const router = useRouter();
  const footerLinks: FooterLinkObject[] = [
    { label: 'Direitos autorais', url: 'about#copyright' },
    { label: 'Termos de uso', url: 'about#terms' },
    { label: 'Politicas de privacidade', url: 'about#privacy' },
  ];

  return (
    <footer
      {...footerProps}
      className={`${className} ${styles.footer_container}`}
    >
      <div className={styles.footer_section}>
        <div className={styles.footer_links_container}>
          {footerLinks.map((link: FooterLinkObject) => {
            return (
              <a
                key={link.label}
                className={styles.footer_links_item}
                onClick={(e) => {
                  e.preventDefault;
                  router.push(`${link.url}`);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className={styles.footer_links_container}>
          <a className={styles.footer_btn_goTop} href="#header">
            <ArrowBendRightUp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
