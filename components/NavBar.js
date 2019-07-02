import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div className="row text-center">
                <div className="col-sm-4">
                    <p>Curated by the <span><a href="https://github.com/codecrapper">CodeCrapper &#128169;</a></span></p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-danger">Add a book</button>
                </div>
                <div className="col-sm-4">
                    <p>Vote for this produce on <span><a href="#">Product Hunt</a></span></p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar