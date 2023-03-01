import reducer from './module/reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));