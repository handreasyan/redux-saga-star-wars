import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import store, {history} from "./redux";
import {HistoryRouter as Router} from "redux-first-history/rr6";
import Routers from "./routes";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routers/>
      </Router>
    </Provider>
  </React.StrictMode>
);

