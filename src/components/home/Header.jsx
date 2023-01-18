import React, { useContext } from 'react';
import { globalContext } from '../context/Context';

const Header = () => {
    const { get, setValue } = useContext(globalContext)
    return (
        <header>
            <h1>
                <span>“</span> Blog <span>”</span>
            </h1>
            <p>
                awesome place to make oneself productive <br />  and entertained through
                daily updates.
            </p>
            <form>
                <input onKeyPress={get} onChange={(e) => setValue(e.target.value)} className='search' type="text" placeholder='Search By Category' />
                <input className='btn' type="button" value='Go' />
            </form>
        </header>
    );
}

export default Header;
