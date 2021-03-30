/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./src/reducers";
import RootStack from "./src/navigators/Screen/RootStack";
const App = () => {
  const store = createStore(allReducer)
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};
export default App;
