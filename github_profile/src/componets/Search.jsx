/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {

    const [username, setUsername] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearch = () => {
        onSearch(username);
    };

    return (
        <div className='search-root'>

            <img id = "logo" src="src/assets/github_icon.png" alt="github logo" />
            <h1 id="search-title">Find GitHub Profile</h1>

            <div id = "search-function">
                <input id = "search-field" maxLength={20} type="text" value={username} onChange={handleInputChange} placeholder='Enter username' />
                <button id = "search-btn" onClick={handleSearch}>Search</button>
            </div>

        </div>
    );
};

export default Search;
