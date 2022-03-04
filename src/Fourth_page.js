import React from 'react'
import dog from './dog.jpg'
import {Link} from 'react-router-dom'


function Fourth_page(params) {
    return(
        <>
         <div className='sec_page_container'>
                <div className='image'>
                    <p className='para'> Which one is Right ?</p>
                    <img src={dog} className='sec_pic'></img>
                    <Link to="/Wrong_page" className="sec_butt">Tiger</Link>
                    <Link to="/Wrong_page" className="sec_butt">Cubs</Link>
                    <Link to="/Fivth_page" className="sec_butt">Dog</Link>
                </div>
        </div>
        </>
    )
}
export default Fourth_page;
