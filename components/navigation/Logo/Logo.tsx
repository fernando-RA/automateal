import Image from 'next/image';
import styles from './Logo.module.scss';
export interface ILogoProps {
  source?: string;
}

export const Logo: React.FC<ILogoProps> = ({ source }) => {
  return <div className={styles.logo_banner}>Inside Sales Turbo</div>;
};

export const BannerLogo: React.FC<ILogoProps> = () => {
  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8471 25.8138V21.6787H15.791V19.4926H19.8471V15.4102H22.0332V19.4926H26.1947V21.6787H22.0332V25.8138H19.8471Z"
        fill="black"
      ></path>
    </svg>
  );
};

export const LogoBackgroundImage: React.FC<ILogoProps> = ({ source }) => {
  return (
    <Image
      src={source}
      width={1920}
      height={1280}
      className={styles.logo_background_image}
      alt="hero_banner"
    />
  );
};
