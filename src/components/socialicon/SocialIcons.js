import React from 'react'
import Item from './Item';
import './SocialIcon.css'

function SocialIcons() {

    let winWidth = window.innerWidth;


    return (
        <div style={{position: 'absolute', zIndex: 1000}}>
            <div className={"container-sidebar" + (winWidth < 500 ? ' mob' : '')} >

            </div>
            <div className={ (winWidth < 500 ? "icon-wrapper-mob" : 'icon-wrapper')}>
                <ul className={winWidth < 500 ? "icon-list-mob" : 'icon-list'}>  
                    <Item link="https://github.com/abish373/" imgPath='./assets/github.svg' />
                    <Item link="https://www.linkedin.com/in/abish-p/" imgPath='./assets/linkedin.svg'/>
                    <Item link="https://www.instagram.com/abish373/" imgPath='./assets/instagram.svg' />
                    <Item link="https://www.facebook.com/abish.abish.547" imgPath='./assets/facebook.svg'/>
                </ul>
            </div>
        </div>
    )
}

export default SocialIcons
