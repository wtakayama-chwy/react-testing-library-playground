import React, { MouseEvent } from 'react';
import { FiSearch } from 'react-icons/fi'
import './SearchButton.scss';

interface Params {
    search: (e: MouseEvent) => void
}

const SearchButton: React.FC<any> = (props: Params) => {

    return (
        <button
            data-testid="search-button"
            onClick={props.search}
        >
            <FiSearch />
        </button>
    );
}

export default SearchButton;