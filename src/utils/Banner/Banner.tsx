import styles from './Banner.module.scss';
export interface IBannerProps {
  id: string;
  children?: React.ReactNode;
}

const Banner: React.FC<IBannerProps> = ({ id, children }) => {
  return (
    <section id={id} className={styles.container}>
      {children}
    </section>
  );
};

export default Banner;
