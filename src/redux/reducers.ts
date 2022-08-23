import { combineReducers } from 'redux';
import postReducer from './post/postReducer';
import productReducer from './products/productsReducer';
export default combineReducers({
	post: postReducer,
	products: productReducer
});
