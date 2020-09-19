import React, { useContext } from 'react'
import './Toggle.css'
import { GlowContext } from '../../App'

function Toggle() {

    const { glowMode, setGlowMode } = useContext(GlowContext)

    const handleChange = e => {
        setGlowMode(!glowMode)
    }

    return (
        <div className="toggle">
            <label className="container" title="Glow Mode">
                <input type="checkbox" onChange={handleChange} />
                <span></span>
                <i className="indicator"></i>
            </label>
        </div>
    )
}

export default Toggle
