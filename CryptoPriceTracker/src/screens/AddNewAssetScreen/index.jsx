import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Pressable} from 'react-native'
import SearchableDropDown from 'react-native-searchable-dropdown'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {useRecoilState} from 'recoil'
import {allPortfolioBoughtAssetsInStorage} from '../../atoms/PortfolioAssets'
import {getAllCoins} from '../../services/requests'

const AddNewAssetScreen = () => {
	const [allCoins, setAllCoins] = useState([])
	const [boughtAssetQuantity, setBoughtAssetQuantity] = useState('')
	const [loading, setLoading] = useState(false)
	const [selectedCoinId, setSelectedCoinId] = useState(false)
	const [assetsInStorage, setAssetsInStorage] = useRecoilState(allPortfolioBoughtAssetsInStorage)

	const isQuantityEntered = () => boughtAssetQuantity === ''

	const onAddNewAsset = () => {

	}

	const fetchAllCoins = async () => {
		if (loading) {
			return;
		}
		setLoading(true)
		const allCoins = await getAllCoins()
		setAllCoins(allCoins)
		setLoading(false)
	}

	useEffect(() => {
		fetchAllCoins()
	}, [])
	const navigation = useNavigation()
	return (
		<View style={{flex: 1}}>
			<SearchableDropDown
				items={allCoins}
				onItemSelect={(item) => setSelectedCoinId(item.id)}
				containerStyle={styles.dropdownContainer}
				itemStyle={styles.item}
				itemTextStyle={{
					color: 'white'
				}}
				resetValue={false}
				placeholder={selectedCoinId || 'Select a coin...'}
				placeholderTextColor='white'
				textInputProps={{
					underlineColorAndroid: 'transparent',
					style: {
						padding: 12,
						borderWidth: 1.5,
						borderColor: '#444444',
						borderRadius: 5,
						backgroundColor: '#1e1e1e',
						color: 'white'
					}
				}}
			/>
			{selectedCoinId && (
				<>
					<View style={styles.boughtQuantityContainer}>
						<View style={{flexDirection: 'row'}}>
							<TextInput
								style={{color: 'white', fontSize: 90}}
								value={boughtAssetQuantity}
								placeholder='0'
								keyboardType='numeric'
								onChange={setBoughtAssetQuantity}
							/>
							<Text style={styles.ticker}>BTC</Text>
						</View>
						<Text style={styles.pricePerCoin}>$40000 per coin</Text>
					</View>
					<Pressable
						style={{...styles.buttonContainer, backgroundColor: isQuantityEntered() ? '#303030' : '#4169E1'}}
						onPress={onAddNewAsset}
						disabled={isQuantityEntered()}
					>
						<Text style={{...styles.buttonText, color: isQuantityEntered() ? 'grey' : 'white'}}>Add New Asset</Text>
					</Pressable>
				</>
			)}
		</View>
	)
}

export default AddNewAssetScreen
