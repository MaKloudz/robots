import React from 'react'
import './Scroll.css'

const Scroll = props => {
    return (
        <div className='div-scroll'>
            {props.children}
        </div>
    )
}



export default Scroll
