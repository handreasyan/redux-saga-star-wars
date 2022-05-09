import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {createReduxHistoryContext, reachify} from "redux-first-history";
import {createBrowserHistory} from "history";
import {appReducer} from "./reducers";
import peopleReducer from "./reducers/people";
import userDetailsReducer from "./reducers/peopleDetails";


const sagaMiddleware = createSagaMiddleware()

const {
  routerReducer,
  routerMiddleware,
  createReduxHistory
} = createReduxHistoryContext({history: createBrowserHistory()});

const store = createStore(combineReducers({
    app: appReducer,
    people: peopleReducer,
    peopleDetails: userDetailsReducer,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(routerMiddleware, sagaMiddleware))
)

export const history = createReduxHistory(store);
export const reachHistory = reachify(history);

sagaMiddleware.run(rootSaga)

export default store