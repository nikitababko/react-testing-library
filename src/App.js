import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
      value="testValue"
      placeholder="some text..."
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Friendly_Female_Koala.JPG/1024px-Friendly_Female_Koala.JPG"
      alt="image"
      style={{ width: '70px', height: '100px' }}
    />
  </div>
);

const App = () => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};

export default App;
