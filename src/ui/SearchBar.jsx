import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RxCrossCircled } from 'react-icons/rx';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <span className={styles.icon}>
          <CiSearch size={'2rem'} color={'#f3f4f7'} />
        </span>
        <div className={styles.searchInputContainer}>
          <input
            className={styles.searchInput}
            placeholder="This search bar does absolutely nothing."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <span>
          {search && (
            <button
              className={styles.clearButton}
              onClick={() => {
                setSearch('');
              }}
            >
              <RxCrossCircled size={'2rem'} color={'#f3f4f7'} />
            </button>
          )}
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
