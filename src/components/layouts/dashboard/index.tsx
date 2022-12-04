import { Navbar } from '@/components/navigation/Navbar';
import { Box, Container } from '@chakra-ui/react';
import * as React from 'react';

export interface IDashboardLayout {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Navbar />
      <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
        {children}
      </Container>
    </Box>
  );
};
