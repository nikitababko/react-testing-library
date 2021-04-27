import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const getUser = () => Promise.resolve({ id: 1, name: 'Nikita' });

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
      required
    />
    <img
      style={{ width: '70px', height: '100px' }}
      className="image"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Friendly_Female_Koala.JPG/1024px-Friendly_Female_Koala.JPG"
      alt="image"
    />
  </div>
);

const App = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};

export default App;
