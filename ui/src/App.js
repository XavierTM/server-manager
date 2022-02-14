
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Component } from 'react'

// pages
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Login from './pages/Login';

// components
import LoadingIndicator from './components/LoadingIndicator';
import Navbar from './components/Navbar';

// stuff
import store from './store';
import './App.css';
import { init as initWebsockets} from './websocket';


window.App = {};

function setWindowDimensions() {

	const winHeight = window.innerHeight + 'px';
	const winWidth = window.innerWidth + 'px';

	document.documentElement.style.setProperty('--window-height', winHeight);
	document.documentElement.style.setProperty('--window-width', winWidth);

}

window.addEventListener('resize', setWindowDimensions);
setWindowDimensions();


class App extends Component {


	componentDidMount() {
		initWebsockets();
	}

	render() {
		return (
			
			<Provider store={store}>

				<Router>

					<LoadingIndicator />
					<Navbar />
					
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/test" component={Test} />

				</Router>
			</Provider>
		);
	}
}

export default App;
