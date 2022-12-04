import { NextPageWithLayout } from '@/@types/page';
import { DashboardLayout } from '@/components/layouts/dashboard';
import { useSession } from 'next-auth/react';

const Dashboard: NextPageWithLayout = () => {
  const { data: sessionData } = useSession();
  return sessionData ? (
    <div>Hello world is authenticated {sessionData.user.email} </div>
  ) : (
    <div>is not authed</div>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
