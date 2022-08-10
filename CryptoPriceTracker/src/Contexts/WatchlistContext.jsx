import React, {useContext, createContext, useState, useEffect} from 'react'
import {AsyncStorage} from 'react-native'

const WatchlistContext = createContext()

export const useWatchlist = () => useContext(WatchlistContext)

const WatchlistProvider = ({children}) => {
	const [watchlistCoinIds, setWatchlistCoinIds] = useState([])

	const getWatchlistData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("@watchlist_coins")
			setWatchlistCoinIds(jsonValue !== null ? JSON.parse(jsonValue) : [])
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getWatchlistData()
	}, [])

	const storeWatchlistCoin = async (coinId) => {
		try {
			const newWatchlist = [...watchlistCoinIds, coinId]
			const jsonValue = JSON.stringify('@watchlist_coins', newWatchlist)
			await AsyncStorage.setItem('@watchlist_coins', jsonValue)
			setWatchlistCoinIds(newWatchlist)
		} catch (e) {
			console.log(e)
		}
	}

	const removeWatchCoinId = async (coinId) => {
		const newWatchlist = watchlistCoinIds.filter((coinIdValue) => coinIdValue !== coinId)
		const jsonValue = JSON.stringify(newWatchlist)
		await AsyncStorage.setItem('@watchlist_coins', jsonValue)
		setWatchlistCoinIds(newWatchlist)
	}

	return (
		<WatchlistContext.Provider value={{watchlistCoinIds, storeWatchlistCoin, removeWatchCoinId}}>
			{children}
		</WatchlistContext.Provider>
	)
}

export default WatchlistProvider
