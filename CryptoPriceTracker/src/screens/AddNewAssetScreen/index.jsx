import React from 'react'
import {View, Text} from 'react-native'
import SearchableDropDown from 'react-native-searchable-dropdown'

const AddNewAssetScreen = () => {
	return (
		<View>
			<SearchableDropDown
				items={[]}
				onItemSelect={(item) => console.log(item)}
				containerStyle={{
					width: '100%',
					paddingHorizontal: 10,
					paddingVertical: 20
				}}
				itemStyle={{
					padding: 10,
					marginTop: 2,
					backgroundColor: '#1e1e1e',
					borderWidth: 1,
					borderColor: '#444444',
					borderRadius: 5
				}}
				itemTextStyle={{
					color: 'white'
				}}
				items={[]}
				resrtValue={false}
				placeholder={'Select a coin...'}
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
		</View>
	)
}

export default AddNewAssetScreen
