import { Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box
      as="section"
      maxW="100%"
      position={'sticky'}
      top="-1px"
      display={'block'}
      backgroundColor={useColorModeValue('white', 'gray.800')}
      zIndex={999}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('md', 'md-dark')}
      >
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </Box>
    </Box>
  );
};
