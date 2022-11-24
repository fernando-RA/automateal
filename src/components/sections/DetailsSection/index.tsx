import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';
export interface IDetailsSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  callToAction?: string;
  imgUrl?: string;
  children?: ReactNode;
}

const DetailsSection: React.FC<IDetailsSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  children,
  callToAction,
  imgUrl,
}) => {
  return (
    <Box
      id={id}
      maxW="7xl"
      mx="auto"
      px={{ base: '0', lg: '12' }}
      py={{ base: '0', lg: '6' }}
    >
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '0', lg: '20' }}
      >
        <Box
          width={{ lg: 'sm' }}
          bg={{
            base: useColorModeValue('red.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '6' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" color={useColorModeValue('gray.800', 'white')}>
                {title}
              </Heading>
              <Heading size="xl" fontWeight="normal">
                {description}
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="bold"
                fontSize="lg"
              >
                {subtitle || callToAction}
              </Link>
              <Icon
                color={useColorModeValue('gray.800', 'white')}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
          <Flex>{children}</Flex>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src={imgUrl}
            display={{ base: 'none', sm: 'initial' }}
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default DetailsSection;
