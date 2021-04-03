import logo from './logo.jpg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from './pages/home';
import Resume from './pages/resume';
import AcademicCredential from './pages/academic-credential';
import AcademicWorkExp from './pages/academic-work';
import ProfessionalSummary from './pages/professional-summary';
import CoverLetter from './pages/cover-letter';

import Footer from "./components/footer"


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="menu">
					<Link className="text-white" to="/">
						Home
					</Link>
					<Link className="text-white" to="/resume">
						Resume
					</Link>
					<Link className="text-white" to="/academiccredential">
						Academic Credential
					</Link>
					<Link className="text-white" to="/academicworkexp">
						Academic Work Experience
					</Link>
					<Link className="text-white" to="/professionalsummary">
						Professional Summary
					</Link>
				</div>
				<div className="social-media">
					<Footer />
				</div>
			</header>

			<div className="App-body">
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/resume" component={Resume} />
					<Route path="/coverltr" component={CoverLetter} />
					<Route path="/academiccredential" component={AcademicCredential} />
					<Route path="/academicworkexp" component={AcademicWorkExp} />
					<Route path="/professionalsummary" component={ProfessionalSummary} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
