import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducers from "./Reducer";


const store = createStore (
    Reducers,
    applyMiddleware(thunk)
);

export default store;