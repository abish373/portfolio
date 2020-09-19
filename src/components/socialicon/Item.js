import React from 'react'

function Item({ imgPath, link }) {
    return (
        <li className="icons">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="icon-img" alt="" src={require("" + imgPath + "")} />
            </a>
        </li>
    )
}

export default Item
