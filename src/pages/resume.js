import React from 'react';
import {useHistory} from 'react-router-dom';

import '../App.css';
import resume01 from "../assets/ResumeAndCoverLetter/resume01.png"
// import resume02 from '../assets/ResumeAndCoverLetter/resume02.png';

const Resume =()=> {
    let history = useHistory()
    return (
		<>
			<div>
				<h1 style={{ background: 'coral', height: "80px" }}>Resume</h1>
			</div>
			<div
				className="cover-letter"
				onClick={() => {
					history.push('/coverltr');
				}}
			>
				<p className="text text-center d-flex float-right">cover letter</p>
				
			</div>

			<img className="w-100" src={resume01} alt="" />
			<br />
			{/* <img className="w-100" src={resume02} alt="" /> */}
		</>
	);
}

export default Resume;