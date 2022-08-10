import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Entypo, AntDesign } from '@expo/vector-icons';
import WatchlistScreen from '../screens/WatchlistScreen'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					backgroundColor: '#181818'
				}
		}}>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({focused, color}) => <Entypo name="home" size={focused ? 30 : 25} color={color} />
			}}/>
			<Tab.Screen name="Watch" component={WatchlistScreen} options={{
				tabBarIcon: ({focused, color}) => <AntDesign name="star" size={focused ? 30 : 25} color={color} />
			}}/>
		</Tab.Navigator>
	)
}

export default BottomTabNavigator;