import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBooksData } from '../store'

import Link from 'next/link'

import Jumbotron from '../components/Jumbotron'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const BookPage = ({ dispatch, loading, booksData }) => {

    // For when book has no description property from the API
    const loremFiller = "God gave you this gift of imagination. Use it. The least little bit can do so much. This painting comes right out of your heart."

    useEffect(() => {
        dispatch(fetchBooksData())
    }, [])

    // const testRedux = () => {
    //     dispatch(fetchBooksData())
    // }

    const renderBooksTest = () => {
        if(!loading) {
            return booksData.map(book => {
                return (
                    <div className="row" key={book.id} style={{paddingBottom: "50px"}}>
                        <div className="col-sm-3">
                            <img src={book.volumeInfo.imageLinks.thumbnail}/>
                        </div>
                        <div className="col-sm-9">
                            <h4>{book.volumeInfo.title}</h4>
                            <p className="font-italic">By {book.volumeInfo.authors[0]}</p>
                            <p>{book.volumeInfo.description ? `${book.volumeInfo.description.substring(0, 200)}...` : loremFiller}</p>
                            <span><a href={book.volumeInfo.infoLink}>Go to the Amazon page to read more &amp; make me money.</a></span>
                        </div>
                    </div>
                )
            })
        }
        return <h1 className="text-center">LOADING...</h1>
    }

    return (
        <div className="container">
            <h3 style={{paddingTop: "2rem", paddingBottom: "2rem"}} className="text-center">Some Python Books!</h3>
            <Jumbotron />
            <br />
            <NavBar />
            <br />
            <br />
            <br />
            {renderBooksTest()}
            <Link href="/index"><button className="justify-content-end btn btn-warning">Back</button></Link>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    const { loading, booksData } = state
    return { loading, booksData }
}

export default connect(mapStateToProps)(BookPage)