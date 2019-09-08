import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

export default store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
