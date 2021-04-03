import React from 'react';
import bachelorOfPharmacy from '../assets/certificates/bachelorOfPharmacy.png';
import MBA from '../assets/certificates/MBA.png';
import GSK from '../assets/certificates/GSK.png';
import BICO from '../assets/certificates/BICO.png'
import aroghyoNiketon from '../assets/certificates/aroghyoNiketon.png';




const AcademicCredential=() =>{
    return (
		<h3>
			<div style={{ background: 'coral', height: '80px' }}>
				<h1>Academic Credential</h1>
			</div>
			<h3>Certificate of Masters in Business Administration</h3>
			<img className="w-100" src={MBA} alt="" />
			<hr></hr>

			<h3>Certificate of Bachelor in Pharmacy</h3>
			<img className="w-100" src={bachelorOfPharmacy} alt="" />
			<hr></hr>

			<h3>Internship Certificate from GlaxoSmithKline</h3>
			<img className="w-100" src={GSK} alt="" />
			<hr></hr>

			<h3>Internship Certificate from BICO Pharmaceuticals</h3>
			<img className="w-100" src={BICO} alt="" />
			<hr></hr>

			<h3>Internship Certificate from Aroghyo Niketon Hospital</h3>
			<img className="w-100" src={aroghyoNiketon} alt="" />
		</h3>
	);
}

export default AcademicCredential;