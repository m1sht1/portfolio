import React from 'react';
import AcademicProject from '../assets/projects/academicProject.png'
import CapstoneProject01 from '../assets/projects/capstoneProject01.png'
import CapstoneProject02 from '../assets/projects/capstoneProject02.png'
import CapstoneProject03 from '../assets/projects/capstoneProject03.png'
import CapstoneProject04 from '../assets/projects/capstoneProject04.png'
import CapstoneProject05 from '../assets/projects/capstoneProject05.png'
import CapstoneProject06 from '../assets/projects/capstoneProject06.png';
import GameShop1 from '../assets/projects/GameShop1.png';
import GameShop2 from '../assets/projects/GameShop2.png';
import GameShop3 from '../assets/projects/GameShop3.png';
import GameShop4 from '../assets/projects/GameShop4.png';

const AcademicWorkExp=() =>{
    return (
		<>
			<div style={{ background: 'coral', height: '80px' }}>
				<h1>Academic Work Experience</h1>
			</div>

			<h3>Capstone Project Snapshot</h3>
			<img className="w-90" src={CapstoneProject01} alt="" />
			<hr />
			<img className="w-90" src={CapstoneProject02} alt="" />
			<hr />
			<img className="w-90" src={CapstoneProject03} alt="" />
			<hr />
			<img className="w-90" src={CapstoneProject04} alt="" />
			<hr />
			<img className="w-90" src={CapstoneProject05} alt="" />
			<hr />
			<img className="w-90" src={CapstoneProject06} alt="" />

			<h3>Group and Individual Projects</h3>
			<img className="w-100" src={AcademicProject} alt="" />

			<h3>Game Shop</h3>
			<img className="w-100" src={GameShop1} alt="" />
			<img className="w-100" src={GameShop2} alt="" />
			<img className="w-100" src={GameShop3} alt="" />
			<img className="w-100" src={GameShop4} alt="" />
		</>
	);
}

export default AcademicWorkExp;