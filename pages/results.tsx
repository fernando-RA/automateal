import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SearchResult from '../components/widgets/searchResult/searchResult';
import { mockSearchResultProps } from '../components/widgets/searchResult/searchResult.mocks';
import { NextPageWithLayout } from './page';

const Results: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <div className={`flex flex-col space-y-8`}>
        {[...new Array(6)].map((_, index) => {
          return (
            <SearchResult
              key={index}
              {...mockSearchResultProps.base}
            ></SearchResult>
          );
        })}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
