import Image from 'next/image';
import styles from './ValuePropositionSection.module.scss';
export interface IValuePropositionSectionProps {
  sampleTextProp: string;
}

const ValuePropositionSection: React.FC<IValuePropositionSectionProps> = ({
  sampleTextProp,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.div_logos} ${styles.div_logos_body}`}>
        <Image
          src="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286c3e33432c6dbdd67e_replaces.svg"
          loading="lazy"
          width="70"
          height="60"
          alt=""
          className={styles.div_logos_imgs}
        />
        <Image
          src="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286cba56af9ea2f35a1b_paypal-logo.svg"
          loading="lazy"
          width="100"
          height="60"
          alt=""
          className={styles.div_logos_imgs}
        />
        <Image
          src="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286cba56af9ea2f35a1b_paypal-logo.svg"
          loading="lazy"
          width="100"
          height="60"
          alt=""
          className={styles.div_logos_imgs}
        />
        <Image
          src="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286cba56af9ea2f35a1b_paypal-logo.svg"
          loading="lazy"
          width="100"
          height="60"
          alt=""
          className={styles.div_logos_imgs}
        />
        <Image
          src="https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/6146286cd598aa36d5b69ba9_more.svg"
          loading="lazy"
          width="100"
          height="60"
          alt=""
          className={styles.div_logos_imgs}
        />
      </div>
    </div>
  );
};

export default ValuePropositionSection;
