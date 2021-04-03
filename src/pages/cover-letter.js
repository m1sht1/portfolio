import React from 'react';
import coverLetter from "../assets/ResumeAndCoverLetter/coverLetter.png"

const CoverLetter=() =>{
	return (
        <>
		<div style={{ background: 'coral', height: '80px' }}>
			<h1>Cover Letter</h1>
		</div>
        
		<img className="w-100" src={coverLetter} alt="" />
        </>
	)
}

export default CoverLetter;