import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import ActiveBookReducer from '../reducers/reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
