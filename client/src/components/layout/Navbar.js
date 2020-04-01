import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <container fluid='md'>
            <row>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>
                                <h1>Teddy Brewer</h1>
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                <h2>About</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to='projects'>
                                <h2>Projects</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <h2>Contact</h2>
                            </Link>
                        </li>
                    </ul>

                </nav>
            </row>
        </container>
    )
}

export default Navbar