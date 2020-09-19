import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

function NavItem({ imgPath, onClick, text, to, download }) {



    if (to) {
        return (
            <Link to={to} onClick={() => onClick()}>
                <div className="navItem">
                    <img style={{ width: 25, marginTop: 10 }} src={require('' + imgPath + '')} alt="" />
                    {text && <p>{text}</p>}
                </div>
            </Link>
        )
    }


    return (
        <div onClick={() => onClick()}>
            <div className="navItem">
                <img style={{ width: 25, marginTop: 10 }} src={require('' + imgPath + '')} alt="" />
                {text && <p>{text}</p>}
            </div>
        </div>
    )
}

export default NavItem
