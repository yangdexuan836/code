import * as actionTypes from './actionTypes'

export const changeList = value => ({
	type: actionTypes.CHANGE_LIST,
	value: value
})

export const getList = () => {
	return (dispatch) => {
		fetch('/api/home.json')
				.then(res => res.json())
				.then(res => {
					if (res && res.ret && res.data) {
						const action = changeList(res.data.list)
						dispatch(action)
					}
				})
	}
}