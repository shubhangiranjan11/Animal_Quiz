import React from 'react'
import elephant from './ele.jpg'
import {Link} from 'react-router-dom'

function Sec_page() {
    return(
        <>
        <div className='sec_page_container'>
            {/* <p className='para'> Which one is Right ?</p> */}
                <div className='image'>
                    <p className='para'> Which one is Right ?</p>
                    <img src={elephant} className='first_pic'></img>
                    <Link to="/Third_page" className="sec_butt">Elephant</Link>
                    <Link to="/Wrong_page" className="sec_butt">Dog</Link>
                    <Link to="/Wrong_page" className="sec_butt">Cat</Link>
                </div>
        </div>
        </>
    )
}

export default Sec_page;


