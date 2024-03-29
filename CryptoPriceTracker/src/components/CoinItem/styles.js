import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
		paddingTop: 50,
	},
	title: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 3
	},
	text: {
		color: 'white',
		marginRight: 5,
	},
	coinContainer: {
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#282828',
		padding: 15,
	},
	rank: {
		fontWeight: 'bold',
		color: 'white',

	},
	rankContainer: {
		backgroundColor: '#585858',
		marginRight: 5,
		paddingHorizontal: 5,
		borderRadius: 5
	}
});

export default styles