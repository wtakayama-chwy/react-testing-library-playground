import React, { useState, ChangeEvent } from 'react';
import './SearchBox.scss';
import SearchButton from './SearchButton/SearchButton';

interface Params {
    requestSearch: any
}

const SearchBox: React.FC<any> = (props: Params) => {

    const [query, setQuery] = useState('')

    const searchClick = () => {
        if (query) {
            props.requestSearch(query)
        }
    }

    const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <h3>SEARCHBOX COMPONENT</h3>
            <div className="searchbox-wrapper">
                <input
                    data-testid="search-input"
                    type="text"
                    name="search"
                    className="searchBox"
                    placeholder="Search"
                    value={query}
                    onChange={updateQuery}
                />
                <SearchButton
                    search={searchClick}
                />
            </div>
        </>
    );
}

export default SearchBox;