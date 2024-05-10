import { Children } from 'react';
import './Header.css'
import SearchBar from "./SearchBar"

const Header = function({children, result}){

    return (
        <div className='header'>
            <h1 className='filim-heading'><span>🎬</span> Filim</h1>
            {children}
            <p className='header-result'>Found {result} result</p>
        </div>
    )
}

export default Header;