import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <form>
                <input type="text" placeholder='search here....' />
                <input type="submit" value='search' />
            </form>
        </div>
    );
};

export default Header;