import React from 'react'
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'
import CoinItem from '../../components/CoinItem'
import {FlatList} from 'react-native'

const HomeScreen = () => {
	return (
		<FlatList
			data={cryptocurrencies}
			renderItem={({item}) => <CoinItem marketCoin={item}/>}
		/>
	)
}

export default HomeScreen