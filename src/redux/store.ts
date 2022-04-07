import { configApp } from '@src/config/config';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore(initialState?: any) {
	let store;
	if (configApp.MODE !== 'production') {
		const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(...middlewares)));
	} else {
		store = createStore(reducers, initialState, applyMiddleware(...middlewares));
	}

	sagaMiddleware.run(rootSaga);
	return store;
}
export type RootState = ReturnType<typeof reducers>;
