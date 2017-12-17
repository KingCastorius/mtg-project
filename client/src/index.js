import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './screens/Login'
import HomePage from './screens/Home'
import RegisterPage from './screens/Register'
import CollectionPage from './screens/Collection'


const Index = ({pathname}) => {
	switch(pathname) {
		case "/":
			return <LoginPage />
		case "/home":
			return <HomePage />
		case "/register":
			return <RegisterPage />
		case "/collection":
			return <CollectionPage />
		default:
			return <LoginPage />
	}
}

let pathname = window.location.pathname;

ReactDOM.render(
	<Index pathname ={pathname} />,
	document.getElementById('root')
)

window.addEventListener("popstate", () => {
	pathname = window.location.pathname;
})
