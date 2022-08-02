import { applyMiddleware, createStore, } from "redux";
import thunk from "redux-thunk";
import {userReducer } from "./Users/reducer";
import { productReducer } from "./Products/reducer";
import { combineReducers } from "redux";
import { loginReducer } from "./login/reducer";

const rootReducer = combineReducers({
    users: userReducer,
    products : productReducer,
    login: loginReducer,
})

const loggerMiddleware = (store)=>(next)=>(action) =>{
    console.log("action: ", action)
    if(typeof action == "function"){
        return action(store.dispatch)
    }
    next(action);
}

export const store = createStore (
    rootReducer,
    applyMiddleware(thunk)
    // compose(applyMiddleware(thunk), window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
    
    
)

console.log("initial",store.getState());


