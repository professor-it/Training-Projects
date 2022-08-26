import {atom, selector} from 'recoil'

export default allPortfolioBoughtAssets = selector({
	key: 'allPortfolioBoughtAssets',
	get: async () => {
		return [{id: 'bitcoin'}]
	}
})

export const allPortfolioAssets = atom({
	key: 'allPortfolioAssets',
	default: allPortfolioBoughtAssets
})