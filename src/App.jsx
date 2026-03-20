import { useState } from 'react';
import Grid from './components/grid';
import SearchForm from './components/search.form';

export default function App() {
  //initial value for search form and search query
  // const initialSearch = 'Dune';
  const [searchWord, setSearchWord] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && <SearchForm setSearchWord={setSearchWord} initial={searchWord} />}
      <main>
        <h1>How do you like These Movies?</h1>
        <Grid keyword={searchWord} setIsLoading={setIsLoading} isLoading={isLoading} />
      </main>
    </>
  );
}
