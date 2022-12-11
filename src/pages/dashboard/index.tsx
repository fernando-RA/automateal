import { NextPageWithLayout } from '@/@types/page';
import { DashboardLayout } from '@/components/layouts/dashboard';
import {
  Box,
  BoxProps,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { getSession, useSession } from 'next-auth/react';
import { FiDownloadCloud } from 'react-icons/fi';

const Dashboard: NextPageWithLayout = () => {
  const { data: sessionData, status } = useSession();
  let toReturn;
  if (!sessionData) {
    toReturn = (
      <Stack spacing={{ base: '8', lg: '6' }}>
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
        >
          <Stack spacing="1">
            <Heading size="lg" fontWeight="medium">
              BUGOU
            </Heading>
            <Text>Not logged</Text>
          </Stack>
        </Stack>
      </Stack>
    );
  } else {
    toReturn = (
      <Stack spacing={{ base: '8', lg: '6' }}>
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
        >
          <Stack spacing="1">
            <Heading size="lg" fontWeight="medium">
              Dashboard
            </Heading>
            <Text>All important metrics at a glance</Text>
          </Stack>
          <Stack direction="row" spacing="3">
            <Button
              variant="secondary"
              leftIcon={<FiDownloadCloud fontSize="1.25rem" />}
            >
              Download
            </Button>
            <Button variant="primary">Create</Button>
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', lg: '6' }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Stack>
        <Card minH="xs" />
      </Stack>
    );
    return toReturn;
  }
};
const Card = (props: BoxProps) => (
  <Box
    minH="36"
    bg={useColorModeValue('gray.300', 'whiteAlpha.200')}
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    {...props}
  />
);
export default Dashboard;

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export const getServerSideProps: any = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/register',
      },
    };
  }

  return {
    props: { session },
  };
};
