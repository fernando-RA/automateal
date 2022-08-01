import { useState } from 'react';

export interface ISearchProps {}

const Search: React.FC<ISearchProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchTerm);
  };

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
