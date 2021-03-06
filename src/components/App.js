// src/components/App.js
/* eslint */

require("normalize.css/normalize.css");
require("../styles/App.css");

import React from "react";

import Header from "./Header";
import MyFooter from "./Footer";


class App extends React.Component {
	componentWillMount() {
    //this.lock = new Auth0Lock('zfztvzOMpMRQ5pVTYcKIBpqq7nk5Hwvz', 'subversivelabs.auth0.com');
	}

	render() {
		return (
      <div className="animated fadeIn">
				<Header />
				{this.props.children}
				<MyFooter />
      </div>
		);
	}
}

export default App;
