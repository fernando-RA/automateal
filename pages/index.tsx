import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/widgets/search/search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/automateal_logo.jpeg"
        alt="Logo"
        width={240}
        height={240}
        priority
      />
      <Search />
      <p>
        Offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'pt-br' : 'en'}>
          <a className="underline text-blue-600">Português</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
