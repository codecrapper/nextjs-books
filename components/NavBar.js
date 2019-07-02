import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    Curated by the <span><a href="https://github.com/codecrapper">CodeCrapper &#128169;</a></span>
                </li>
                <li>
                    <button className="btn btn-danger">Add a book</button>
                </li>
                <li className="nav-item">
                    Vote for this produce on <span><a href="#">Product Hunt</a></span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar