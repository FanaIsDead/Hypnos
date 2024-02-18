import './searchBar.css'
import {useState} from 'react'

const SearchBar = () => {
    //TODO Work on searching later, look at the pokemon react project for reference
    const [searchInput, setSearchInput] = useState('');
    const list = [];

    return(
        <div id='searchbar'>
            <input id='search' type='search' placeholder='Search here...'/>
        </div>
    );
}

export default SearchBar;