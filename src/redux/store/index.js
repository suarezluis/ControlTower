import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

import ReduxThunk from 'redux-thunk';

export default (store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
));
