import {
  Box,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';


export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const color = useColorModeValue('white', 'gray.800');
  return (
    <Box
      as="section"
      maxW="100%"
      position={'sticky'}
      top="0"
      display={'block'}
      backgroundColor={color}
      zIndex={999}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </Box>
    </Box>
  );
};
