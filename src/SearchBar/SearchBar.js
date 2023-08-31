import React, {useState} from 'react';
import styles from './SearchBar.module.css'

function SearchBar({onSearch}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
  
    // calls searchHandler from App.js
    const searchHandler = () => {
        //alert(`1. search for ${searchTerm}`);
        onSearch(searchTerm);
    };
  
    // triggers search by pressing Enter
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };

    return (
        <div id="divSearchBar">
            <h3>Search Bar</h3>
            <input 
                name="search"
                id="search"
                type="text"
                onChange={handleSearchTermChange}
                onKeyPress={handleKeyPress}
             />
            <button name="search" onClick={searchHandler}>Search</button>
        </div>
    );
}

export default SearchBar;