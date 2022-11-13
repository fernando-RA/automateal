import { useState } from 'react';
import styles from './search.module.scss';
export interface ISearchProps {}

const Search: React.FC<ISearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchTerm);
  };

  return (
    <form className={styles.form_container} onSubmit={handleFormSubmit}>
      <input
        type="text"
        className={styles.form_input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className={styles.btn_primary}>
          Search
        </button>
        <button type="submit" className={styles.btn_primary}>
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
