import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Result_page(params) {
    return(
        <>
        <div className="container">
            <div className="item ">
                <h1 className="first1">Result</h1>
                <Link to="" className="butt">Your score</Link>
            </div>
        </div>
        </>
    )
}

export default Result_page;

