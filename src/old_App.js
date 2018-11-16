import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ 
	appName:state.appName 
})

class App extends React.Component{
	constructor(){
		super();
		this.state = {};
	}

	componentWillMount(){
		store.subscribe(()=> this.state(store.getState()));

	}

	render(){
		const onClick = () => store.dispatch({type:'TOGGLE'});

		return (
			<div>
			<h1>Hello, World</h1>
			<div>
				Learn Redux
				<input
					type='checkbox'
					checked={onClick}
				/>

			</div>
			{
				this.state.checked ? (<h2>Done</h2>) : null
			}

			</div>


		);
	}
}	
