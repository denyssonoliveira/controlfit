import { configureStore  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import rootReducer from './reducers/index';

const PersistConfig: any = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
};

const pReducer: any = persistReducer(PersistConfig, rootReducer); 

export const store: any = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor: any = persistStore(store);