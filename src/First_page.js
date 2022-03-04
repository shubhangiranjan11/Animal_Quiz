import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function First_page(params) {
    return(
        <>
         <div className="container">
            <div className="item ">
                <h1 className="first">Welcome</h1>
                <Link to="/Sec_page" className="butt">Get Start</Link>
            </div>
        </div>  </>
    )
}

export default First_page;


