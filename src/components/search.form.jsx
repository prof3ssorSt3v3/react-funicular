import { useState, useCallback } from 'react';
import styles from '../styles/search.form.module.css';

export default function SearchForm({ setSearchWord, initial }) {
  const [txtKeyword, setTxtKeyword] = useState(initial);

  // const otherDoSearch = (ev)=>{
  //copy of doSearch function...
  //without useCallback, this function is recreated on EVERY re-render of this component
  // }
  //wrap event handler functions in useCallback
  //for performance benefits
  const doSearch = useCallback(
    (ev) => {
      ev.preventDefault();
      setSearchWord(txtKeyword); //go to App.jsx and call setSearchWord() to update keyword state var
    },
    [setSearchWord, txtKeyword],
  );
  let formStyleObj = { borderBottom: '10px solid black', borderTop: '1px solid gold' };

  return (
    <form action="#" onSubmit={doSearch} className={styles.searchForm} style={formStyleObj}>
      <input value={txtKeyword} onChange={(ev) => setTxtKeyword(ev.target.value)} style={{ fontSize: '2rem' }} />
      <button style={{ fontSize: '2rem' }}>Search</button>
    </form>
  );
}
