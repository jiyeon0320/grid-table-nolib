import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-datepicker/dist/react-datepicker.css';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
// import reducer, { initialState } from './reducers';
// import rootSaga from './sagas';
// import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
ReactDOM.render(
    // <Provider store={store}>
    <App />,
    // </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
