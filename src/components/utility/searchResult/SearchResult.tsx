import Link from 'next/link';
import { ISearchData } from '../../../lib/search/types';
import styles from './SearchResult.module.scss';

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div {...divProps} className={styles.container}>
      <Link
        href={url}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{url}</p>
        <p className={styles.sublink}>{title}</p>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
