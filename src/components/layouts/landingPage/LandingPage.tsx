import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useContext } from 'react';
import AuthContext from '../../../state/auth/authContext';
import FeatureFlagsContext from '../../../state/featureFlags/featureFlags';
import Footer from '../../navigation/footer/Footer';
import LayerOneNav from '../../navigation/layerOneNav/layerOneNav';
import { Navbar } from '../../navigation/Navbar';
import { Main } from '../../sections/Main';
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
      <Flex direction="column" flex="1">
        {!authenticated ? <LayerOneNav /> : null}
        {shouldShowNavBar ? <Navbar /> : null}
        <Main>{children}</Main>
        <Footer />
      </Flex>
    </>
  );
};

export default LandingPage;
