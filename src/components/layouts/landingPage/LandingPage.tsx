import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useContext } from 'react';
import AuthContext from '../../../state/auth/authContext';
import FeatureFlagsContext from '../../../state/featureFlags/featureFlags';
import Footer from '../../navigation/footer/Footer';
import LayerOneNav from '../../navigation/layerOneNav/layerOneNav';
import { Navbar } from '../../navigation/Navbar';
import { Main } from '../../sections/Main';

export interface ILandingPage {
  children: React.ReactNode;
}

const LandingPage: React.FC<ILandingPage> = ({ children }) => {
  const { authenticated } = useContext(AuthContext);
  const { shouldShowNavBar } = useContext(FeatureFlagsContext);

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
