import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';

const App = () => {
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Text style={{color: '#000'}}>Texto qualquer</Text>
            </View>
        </PersistGate>
    </Provider>
}

export default App;