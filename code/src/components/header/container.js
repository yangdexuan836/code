import { connect } from 'react-redux'
import Header from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = (state) => ({
	list: state.header.list,
	showModal: state.header.showModal,
	isLogin: state.header.isLogin
})

const mapDispatchToProps = (dispatch) => ({
	openModal() {
		const action = actionCreator.openModal()
		dispatch(action)
	},
	hideModal() {
		const action = actionCreator.hideModal()
		dispatch(action)
	},
	logout() {
		const action = actionCreator.logout()
		dispatch(action)
	},
	getList() {
		const action = actionCreator.getList();
		dispatch(action)
	},
	checkLogin(user, pass) {
		const action = actionCreator.checkLogin(user, pass);
		dispatch(action)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)