import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { quoteReducer } from "./Quotes/quoteReducer";

const rootReducer=combineReducers({
    quoteReducer
    })

export const Store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)