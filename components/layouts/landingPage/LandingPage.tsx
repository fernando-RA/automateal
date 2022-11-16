import Head from 'next/head';
import { useContext } from 'react';
import AuthContext from '../../../state/auth/authContext';
import FeatureFlagsContext from '../../../state/featureFlags/featureFlags';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import LayerOneNav from '../../navigation/layerOneNav/layerOneNav';
import styles from './LandingPage.module.scss';

export interface ILandingPage {
  children: React.ReactNode;
  justify?: 'center' | 'start';
}

const LandingPage: React.FC<ILandingPage> = ({
  children,
  justify = 'center',
}) => {
  const { authenticated } = useContext(AuthContext);
  const { shouldShowNavBar } = useContext(FeatureFlagsContext);

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
        {!authenticated ? <LayerOneNav /> : null}
        {shouldShowNavBar ? <Header /> : null}
        <main className={styles.main_page}>{children}</main>
        <div className={styles.space_filler} />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
