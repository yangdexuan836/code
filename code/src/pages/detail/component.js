import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

export default class Detail extends Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.props.match.params.id) {
			this.getDetailInfo(nextProps.match.params.id)
		}
	}

	render() {
		const title = this.props.title + '(' + this.props.date + ')'
		return(
			<Card title={title} style={{marginTop:'15px'}}>
			   <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
			   <Link to='/detail/0001'>跳转到id为1的详情页</Link>
			</Card>
		)
	}

	componentDidMount() {
		this.getDetailInfo(this.props.match.params.id)
	}

	getDetailInfo(id) {
		fetch('/api/detail.json?id=' + id)
			.then(res => res.json())
			.then(res => {
				if (res && res.ret && res.data) {}
				this.props.changeDetail(res.data)
			})
	}

}