import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SearchResult from '../../components/utility/searchResult/SearchResult';
import { mockSearchResultProps } from '../../components/utility/searchResult/SearchResult.mocks';
import { NextPageWithLayout } from '../page';
import styles from './Results.module.scss';

const Results: NextPageWithLayout = () => {
  return (
    <section className={styles.container}>
      {[...new Array(6)].map((_, index) => {
        return (
          <SearchResult
            key={index}
            {...mockSearchResultProps.base}
          ></SearchResult>
        );
      })}
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="start">{page}</PrimaryLayout>;
};
