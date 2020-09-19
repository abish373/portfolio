import React from 'react'
import './Burger.css'

function Burger({ sidemenu, setSideMenu }) {

    if(sidemenu === 0){
        return (
            <div className='burger' onClick={() => setSideMenu(2)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        )
    }

    return (
        <>
        </>
    )

}

export default Burger
