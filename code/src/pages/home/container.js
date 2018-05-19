import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'
import Home from './component'

const mapStateToProps = state => ({
	list: state.home.list
})

const mapDispatchToProps = dispatch => ({
	getList() {
		const action = actionCreator.getList()
		dispatch(action)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
