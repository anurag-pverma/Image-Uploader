import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Home.css';
function Home() {
  return (
    <div>

        <div className="container">

            <Link className='links' to={''}>Instagram</Link>
            <nav className='navlink'>
                <span>
                <Link className='links' to={`login`}>Login</Link>
                </span>
                <span>
                <Link className='links' to={`signup`}>Signup</Link>
                </span>
            </nav>
        </div>

    </div>
  )
}

export default Home