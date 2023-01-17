import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <Link to="/calendar">Schedule events with Readyassist </Link>
        </div>
    )
}
export default Home;