// In App.js in a new project

import React, {Component} from 'react';
import { View, Text,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from "./Details";



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={()=> navigation.navigate('Details1')}/>
    </View>
  );
}

function DetailsScreen({navigation}){
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
      <Text>Details Screen</Text>
      </TouchableOpacity>
      </View>
  );
}
const Stack = createStackNavigator();

class App extends React.Component{
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{title:'Taewon'}} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Details1" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;