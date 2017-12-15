import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './screens/Login'
import HomePage from './screens/Home'
import RegisterPage from './screens/Register'
import CmcPage from './screens/Cmc'
import ColorsPage from './screens/Colors'
import TypePage from './screens/Type'
import SubtypePage from './screens/Subtype'
import PowerPage from './screens/Power'
import ToughnessPage from './screens/Toughness'

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
