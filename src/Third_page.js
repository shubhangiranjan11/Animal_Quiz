import React from 'react'
import cubs from './cubs.jpg'
import {Link} from 'react-router-dom'

function Third_page(params) {
    return(
        <>
         <div className='sec_page_container'>
                <div className='image'>
                    <p className='para'> Which one is Right ?</p>
                    <img src={cubs} className='sec_pic'></img>
                    <Link to="/Wrong_page" className="sec_butt">Elephant</Link>
                    <Link to="/Fourth_page" className="sec_butt">Cubs</Link>
                    <Link to="/Wrong_page" className="sec_butt">Cat</Link>
                </div>
        </div>
        </>
    )
}
export default Third_page;
