import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './Screens/Game'

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Game" component={Game} options={{
            headerShown: false
          }} />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }

}