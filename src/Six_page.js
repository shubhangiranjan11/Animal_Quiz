import React from 'react'
import peacock from './peacock.jpeg'
import {Link} from 'react-router-dom'

function Six_page(params) {
    return(
        <>
         <div className='sec_page_container'>
                <div className='image'>
                    <p className='para'> Which one is Right ?</p>
                    <img src={peacock} className='sec_pic'></img>
                    <Link to="/Result_page" className="sec_butt">Peacock</Link>
                    <Link to="/Wrong_page" className="sec_butt">Ostrich</Link>
                    <Link to="/Wrong_page" className="sec_butt">Parrot</Link>
                </div>
        </div>
        </>
    )
}
export default Six_page;
