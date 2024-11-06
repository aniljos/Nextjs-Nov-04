import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';


const combinedReducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})


//store
export const store = configureStore({
    reducer: combinedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});


// export the data type of the state
export type AppState = ReturnType<typeof store.getState>;

// export the signature of the dispath method
export type AppDispatch = typeof store.dispatch;

