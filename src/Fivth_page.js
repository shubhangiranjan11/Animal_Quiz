import React from 'react'
import cat from './cat.jpg'
import {Link} from 'react-router-dom'

function Fivth_page(params) {
    return(
        <>
         <div className='sec_page_container'>
                <div className='image'>
                    <p className='para'> Which one is Right ?</p>
                    <img src={cat} className='sec_pic'></img>
                    <Link to="/Wrong_page" className="sec_butt">Lion</Link>
                    <Link to="/Six_page" className="sec_butt">Cat</Link>
                    <Link to="/Wrong_page" className="sec_butt">Tiger</Link>
                </div>
        </div>
        </>
    )
}
export default Fivth_page;
