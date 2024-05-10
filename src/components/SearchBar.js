import './SearchBar.css'

const SearchBar = function({query, onSetQuery}){
    return (
        
        <input className='search-input' type="text" placeholder="Search movies..." value={query} onChange={(e) => onSetQuery(e.target.value)}/>
    )
}

export default SearchBar;