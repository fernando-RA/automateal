import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
export interface IMainSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

const MainSection: React.FC<IMainSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <Box as="section" bg="bg-surface" id={id}>
      <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              {title}
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              {subtitle}
            </Text>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              {description}
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: 'column', sm: 'row' }}
            justify="center"
          >
            <Button variant="outline" size="lg">
              Learn more
            </Button>
            <Button variant="solid" size="lg">
              Start Free Trial
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;
