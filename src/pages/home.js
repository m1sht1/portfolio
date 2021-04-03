import React from 'react';
import '../App.css';

const HomeScreen = ()=> {
    return (
		<>
			<div style={{ background: 'coral' }}>
				<h1>Hi! I Am Sanjana Sharmin</h1>
				<h4>Full Stack Developer</h4>
			</div>
			<div className="content">
				<div className="about-content text-justify">
					<h1>About Me</h1>
					<p className="pattern">
						My name is Sanjana Sharmin. I am almost finished my fourth semester. Now, I am
						looking for my first full-time job. I have been practicing to solve problems to be a problem
						solver. I cannot say with 100% confidence where I see myself in three years or what my big
						career goal is. The world is changing rapidly, and I don’t have enough professional experience
						to be certain about such things. However, I know that I can provide a fresh take and an
						extraordinary approach to every project. I am always open to challenges and constructive
						feedback. I am open-minded and learn new things quickly. I want to become a team player and
						dedicate all my skills and talents to develop high-quality and unique products.
						{/* <br></br>
						I am enthusiast to play cricket, which is my favorite game. I have my own team where I am the captain
						to lead my team to be succeed. */}
					</p>
				</div>
				<div className="phylosophy-content text-justify">
					<h1>Philosophy of Life</h1>
					<p className="pattern">
						Nowadays, in the 21st century people are living life of the constant pursuit for
						money,successful career, what is making impression that only those values are important. Than
						they have to stop for a while and contemplate about their life goals, the most important thing
						for me is my family. According to my rules, they are always on the first place, and can count on
						me, just the same like I can count on them.
						<br></br>
						My philosophy of life tells that I always have to be myself and listen to my heart as much as I
						listen to my mind and to play along with the voice of my conscience. I believe I can develop
						myself, every time try to experience something new and always use an opportunity to increase my
						knowledge in order to be conscious and intelligent.
						{/* <br></br>I am convinced that the best way to achieve happiness is to be loyal to my family and
						friends who has optimistic view on future, as my philosophy of life says. */}
					</p>
				</div>
			</div>
		</>
	);
}

export default HomeScreen;