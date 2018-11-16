
import App from './components/App';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

/*Note that the reducer receives both the current state and the action as parameters, and returns the modified state. A well-written reducer should not have any side-effects, that is, if you call a reducer with the same state and the same action, you should always get the same result. Reducers should not modify or rely on any global state. It's also good practice to encapsulate as much of your application logic as possible in reducers, because, since your reducers don't rely on side-effects or global state, they're really easy to test, debug, and refactor.*/

const defaultState = {

	checked: false,
	appName:'conduit',
	articles: null 

};
const reducer = function(state = defaultState, action){
	switch (action.type){
		case 'TOGGLE':
			return { ...state, checked: !state.checked };

	}

	return state;
};


/*A store has three functions that you're going to be using in this course:

getState - fetches the current state of a store
dispatch - fires off a new action
subscribe - fires a callback everytime there's a new action after a reducer's action

*/

const store = createStore(reducer);

class App extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		store.subscribe(() => this.setState(store.getState()));

		// subscription takes place after Redux store initialization action
		// so listener won't update component's initial state -
		// the app state needs to be synchronized manually

		this.setState(store.getState());
	}

  render() {

  	const onClick = () => store.dispatch({ type: 'TOGGLE' });

    return (
      <div>
      	<h1>To-dos</h1>
      	<div>
      		Learn Redux&nbsp;
      		<input 
      			type="checkbox"
      			checked={!!this.state.checked}
      			onClick={onClick} />
      	</div>
      	{
      		this.state.checked ? (<h2>Done!</h2>) : null
      	}
      </div>
    );
  }
}

ReactDOM.render((
	<Provider store={store}>
  <App />
  	</Provider>
), document.getElementById('root'));


