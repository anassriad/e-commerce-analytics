import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'; // Fixed: useNavigate instead of useNavigation
import { useDebouncedCallback } from 'use-debounce';
import './index.css';

function Index() {
  const location = useLocation();
  const navigate = useNavigate(); // Fixed: useNavigate
  const queryParams = new URLSearchParams(location.search); // Fixed: queryParams instead of queryPrams
  const [search, setSearch] = useState(queryParams.get('query') || '');

  const debouncedSearch = useDebouncedCallback((text) => {
    navigate(`?query=${text}`); // Update the URL with the new query parameter
  }, 500);

  const handleSearch = (text) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="search-button">
        <FaSearch className="size" />
      </div>
    </div>
  );
}

export default Index;