import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/about">
            <button className='nav'>About</button>
            </Link>
            <Link to="/logo">
            <button className='nav'>Logo</button>
            </Link>
        </div>
    )
}

export default Home