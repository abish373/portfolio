import React from 'react'
import PDF from '../menu/assets/Abish_Resume.pdf'

function Resume() {
    return (
        <div style={{ width: '100vw', height: '100vh'}}>
            <embed
            src={PDF + "#toolbar=0"}
            type="application/pdf"
            style={{height: '100%', width: '100%'}}
        />
        </div>
    )
}

export default Resume;
