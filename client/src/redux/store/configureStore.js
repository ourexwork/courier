import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from '../reducers/auth';
import testimonialsReducer from '../reducers/testimonial';
import { userReducer } from '../reducers/user';
<<<<<<< HEAD
=======
import { shipmentReducer } from '../reducers/shipments';
import { errorReducer } from '../reducers/error';

>>>>>>> bd452d805f920d6ae1ef6bd2f6f6659df7342760
// import filterReducer from '../reducers/filtersReducer';
// import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
<<<<<<< HEAD
  const store = createStore(
    combineReducers({
      auth: authReducer,
      form: formReducer,
      testimonials: testimonialsReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
=======
    const store = createStore(combineReducers({
            auth: authReducer,
            users: userReducer,
            shipments: shipmentReducer,
            error: errorReducer,
            form: formReducer

        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
>>>>>>> bd452d805f920d6ae1ef6bd2f6f6659df7342760
