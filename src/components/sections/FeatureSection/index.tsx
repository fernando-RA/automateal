import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

export const FeatureSection: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.800', 'white')}
      color={useColorModeValue('white', 'gray.800')}
      as="section"
      padding="-12px"
    >
      <Container maxW="1280px" py={{ base: '16', md: '12' }}>
        <Stack spacing={{ base: '12', md: '16' }}>
          <Stack
            spacing={{ base: '4', md: '5' }}
            align="center"
            textAlign="center"
          >
            <Text color="muted" fontSize={{ base: 'sm', md: 'md' }} maxW="3xl">
              WE GET YOU
            </Text>
            <Stack maxW="60%" spacing="3">
              <Text
                fontSize="2.5em"
                fontWeight="Bold"
                color="accent"
                lineHeight="1.25em"
              >
                Built By Agency Owners <br /> For Agency Owners
              </Text>
              <Heading
                paddingTop="6"
                size={useBreakpointValue({ base: 'sm', md: 'md' })}
              >
                We understand the true challenges faced by onboarding clients,
                sending invoices, communication, project management and more.
                <br />
                <br />
                But, if you love spending hours building spreadsheets and
                setting up complex processes for your agency this tool is not
                for you!
              </Heading>
            </Stack>
            <Text
              color="muted"
              paddingTop="6"
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="3xl"
            >
              This tool is built to <b>simplify your agency</b> not make it more
              complicated.
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            marginY={50}
            columnGap="16px"
            rowGap="16px"
          >
            <PricingCard
              bg="gray.700"
              color="white"
              data={{
                image:
                  'https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/619d151dcadd833d692a4f44_61196716b86b160705b7ca23_Icon%203.svg',
                name: 'Get More Clients And Increase Your Client Retention Rate',
                description:
                  'Most clients report they leave because of inefficient communication and a lack of alignment. Not because of a lack of results!',
                benefits:
                  'AgenciFlow solves this problem by eliminiating inefficiency and confusion and ensuring seamless communication with your team members and clients.',
              }}
            />
            <PricingCard
              bg="gray.700"
              color="white"
              data={{
                image:
                  'https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/619d1595988395d4cf3221ad_61196632fabec42ae9e7457d_Icon%201.svg',
                name: 'Keep Your Clients Always Up-To-Date',
                description:
                  'Eliminate another client concern ‘what are you working on?’ with the Client Dashboard: an instant and intuitive way for your client to check on work progress, tasks, projects, results and more.',
                benefits:
                  'Reduce unnecessary communication and increase your client’s satisfaction. No more manual updates or pestering emails.',
              }}
            />
            <PricingCard
              bg="gray.700"
              color="white"
              data={{
                image:
                  'https://uploads-ssl.webflow.com/61461a5621e91a9346dd631e/619d151dcadd833d692a4f44_61196716b86b160705b7ca23_Icon%203.svg',
                name: 'All-In-One Place.\nConsolidate Your Tech Stack',
                description:
                  'One login. One platform. One software. No more splitting your comunication efforts throughout 2-3 different apps.',
                benefits:
                  'Sign-up in 5 minutes, onboard a client in 7 minutes, and become an expert in 2 hours: simple. Your clients will love it.',
              }}
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

import { BoxProps } from '@chakra-ui/react';

interface PricingCardProps extends BoxProps {
  data: {
    name: string;
    description: string;
    image: string;
    benefits: string;
  };
}

export const PricingCard = (props: PricingCardProps) => {
  const { data, ...rest } = props;
  const { name, description, image, benefits } = data;

  return (
    <Flex
      direction="column"
      p="40px"
      rounded="lg"
      pos="relative"
      maxW="2xl"
      mx="auto"
      {...rest}
    >
      <Box flex="1">
        <Flex align="center" fontWeight="extrabold" mt="4" mb="3">
          <Image src={image}></Image>
        </Flex>
        <Text fontSize="2xl" lineHeight="1" fontWeight="bold">
          {name}
        </Text>
        <Box mt="6">
          <Text fontSize="md" fontWeight="semibold" mb="6">
            {description}
          </Text>
          <Text fontSize="md" mb="6">
            {benefits}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
