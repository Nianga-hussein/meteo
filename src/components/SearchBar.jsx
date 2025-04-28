import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const debouncedSearch = debounce((value) => {
    if (value.trim() !== '') {
      onSearch(value);
    }
  }, 800);

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() !== '') {
      onSearch(input);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Entrez une ville..."
      />
      <button onClick={handleClick}>Rechercher</button>
    </div>
  );
}

export default SearchBar;