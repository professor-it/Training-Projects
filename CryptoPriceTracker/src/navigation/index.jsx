import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CoinDetailedScreen from '../screens/CoinDetailedScreen'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="Root"
			screenOptions={{headerShown: false}}
		>
			<Stack.Screen name="Root" component={BottomTabNavigator}/>
			<Stack.Screen name="CoinDetailed" component={CoinDetailedScreen}/>
		</Stack.Navigator>
	)
}

export default Navigation;