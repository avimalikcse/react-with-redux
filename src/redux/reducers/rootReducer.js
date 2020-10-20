
    import { combineReducers } from 'redux';


    import filterReducer from './filterReducer';


    const rootReducer = combineReducers({
        filter: filterReducer,
    });

    export default rootReducer;