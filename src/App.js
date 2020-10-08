import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer';
import Route from './routes';
import 'react-native-gesture-handler';

const store = createStore(rootReducer);

const App = () => (
	<Provider store={store}>
		<Route />
	 </Provider>
);

export default App;