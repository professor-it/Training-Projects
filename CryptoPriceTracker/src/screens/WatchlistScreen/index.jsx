import React, {useContext} from 'react'
import {View, Text, FlatList} from 'react-native'
import {useWatchlist} from '../../Contexts/WatchlistContext'
import CoinItem from '../../components/CoinItem'

const WatchlistScreen = () => {
	const {watchlistCoinIds} = useWatchlist()
	return (
		<FlatList
			data={watchlistCoinIds}
			render={({item}) => <CoinItem marketCoin={item}/>}
		/>
	)
}

export default WatchlistScreen
