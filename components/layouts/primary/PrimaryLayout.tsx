import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import styles from './PrimaryLayout.module.scss';
export interface IPrimaryLayout {
  children: React.ReactNode;
  justify?: 'center' | 'start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'center',
}) => {
  const styleJustify = () => {
    return justify === 'center' ? styles.centered : styles.align_left;
  };

  return (
    <>
      <Head>
        <title>Automateal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${styleJustify()}`}>
        <Header />
        <main className={styles.main_page}>{children}</main>
        <div className={styles.space_filler} />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
