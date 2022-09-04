import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/widgets/search/search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      logo
      <Search />
      language toggle
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
