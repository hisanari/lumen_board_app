import React, { Component } from 'react';
import axios from 'axios';

const ENDPOINT = "http://localhost:8080/api/v1/all";

class BoardResult extends Component {

	constructor(props) {
		super(props);
			this.state = {
		};
	}

	componentDidMount(){
		axios
			.get(ENDPOINT)
			.then((result) => {
			console.log(result);
			});
		}


	render(){
		return(
			<h1>BoardrResult</h1>
			);
	}
}

export default BoardResult;