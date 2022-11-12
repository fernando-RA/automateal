import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/search';
import styles from './index.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  return (
    <section className={styles.section_container}>
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
        <Link
          href="/"
          locale={locale === 'en' ? 'pt-br' : 'en'}
          className={styles.language_label}
        >
          Português
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
