
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Page from './Page';
import Component from '../components/Component';



class Login extends Page {

	constructor(...args) {
		super(...args);

		this.login = this.login.bind(this);
	}


	login() {

		const { username, password } = this.state.values;

		if (!username)
			return alert("Provide a username.");

		if (!password)
			return alert("Provide a password.");


		if (username.toLowerCase() !== 'justinmapeta')
			return alert("Invalid credentials");


		if (password !== 'MAPETA')
			return alert("Invalid credentials");

		Page.redirect('/dashboard');

	}


	state = {
		values: {
			username: '',
			password: ''
		}
	}


	login

	_render() {

		const { username, password } = this.state;

		return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(var(--window-height) - var(--navbar-height))' }}>

			<div style={{ width: '220px', border: '1px solid #1976d2', padding: 20, borderRadius: 5 }}>
				<TextField
					onChange={this.onChangeHandlerGenerator('username')}
					value={username}
					fullWidth
					variant="outlined"
					size="small"
					label="Username"
				/>

				<Spacer />

				<TextField
					onChange={this.onChangeHandlerGenerator('password')}
					value={password}
					fullWidth
					variant="outlined"
					size="small"
					label="Password"
					type="password"
				/>

				<Spacer />

				<Button
					fullWidth
					onClick={this.login}
					variant="contained"
					size="large"
				>LOGIN</Button>

			</div>

		</div>
	}
}


class Spacer extends Component {

	render() {
		return <div
			style={{
				height: 20
			}}
		/>
	}
}


export default Login;