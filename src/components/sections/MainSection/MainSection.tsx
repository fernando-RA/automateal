import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import ValuePropositionSection from '../ValuePropositionSection/ValuePropositionSection';
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
  const color = useColorModeValue('gray.800', 'white');
  return (
    <Box id={id} as="section" bg="bg-surface">
      <Container
        maxW="960px"
        minH="-webkit-fit-content"
        paddingTop={{ base: '16', md: '24' }}
      >
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading
              as="h1"
              paddingBottom="3rem"
              textAlign="center"
              lineHeight="1.2em"
              bgGradient={`linear(to-r, ${color}, blue)`}
              bgClip="text"
              fontSize="5rem"
              fontWeight="extrabold"
            >
              {title}
            </Heading>
            <Heading
              textAlign="center"
              fontSize="2em"
              maxW="80%"
              lineHeight="1.2em"
            >
              {subtitle}
            </Heading>
            <Text
              color="muted"
              maxW="2xl"
              py="2rem"
              textAlign="center"
              fontSize="xl"
            >
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
          <Stack>
            <ValuePropositionSection></ValuePropositionSection>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;
