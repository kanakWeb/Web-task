import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    
            <div className='margin-yAxis'>
            <Link to='/' class="button">Layout 1</Link>
            <Link to='/layer2' class="button">Layout 2</Link>
            <Link to='/layer3' class="button">Layout 3</Link>
        </div>
        
    );
};

export default Nav;