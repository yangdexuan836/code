import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Row, Col, Menu, Icon, Button, Modal, Input } from 'antd'
import styles from './style.mcss'
const FormItem = Form.Item;

class Header extends Component {

	// shouldComponentUpdate(nextProps) {
	// 	if (nextProps.list.length !== this.props.list.length) {
	// 		return true
	// 	}else if(nextProps.isLogin !== this.props.isLogin){
	// 		return true
	// 	}else {
	// 		return false
	// 	}
	// }

	render() {
		const { getFieldDecorator } = this.props.form;
		const logo = require('../../assets/imgs/logo.png')
		const menuItems = this.props.list.map((item, index) => {
			return (
				<Menu.Item key={item.id} className={styles.item}>
          <Icon type="appstore" />{item.title}
        </Menu.Item>
			)
		})

		let button = null

		if (this.props.isLogin) {
			button = <Button type="primary" style={{marginTop: '20px'}} onClick={this.props.logout}>退出</Button>
		}else {
			button = <Button type="primary" style={{marginTop: '20px'}} onClick={this.props.openModal}>登陆</Button>
		}


		return (
			<div>
				<Row>
			      <Col span={4}>
			      	<img src={logo} onClick={this.handleClick.bind(this)} className={styles.logo}/>
			      </Col>
			      <Col span={18}>
			      	<Menu mode="horizontal">
			      		{menuItems}
			      	</Menu>
			      </Col>
			      <Col span={2}>
			      	{button}
			      </Col>
			    </Row>
			    <Modal
		          title="登陆"
		          visible={this.props.showModal}
		          onOk={this.handleSubimit.bind(this)}
		          onCancel={this.props.hideModal}
		          cancelText="取消"
		          okText="登陆"
		        >
			      <Form onSubmit={this.handleSubmit} className="login-form">
			        <FormItem>
			          {getFieldDecorator('user', {
			            rules: [{ required: true, message: '请填写用户名' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
			          )}
			        </FormItem>
			        <FormItem>
			          {getFieldDecorator('password', {
			            rules: [{ required: true, message: '请填写密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			          )}
			        </FormItem>
	      		</Form>
		      </Modal>
	     	</div>
		)
	}

	componentDidMount() {
		this.props.getList()
	}

	handleClick() {
		this.props.history.replace('/')
	}

	handleSubimit() {
		 this.props.form.validateFields((err, values) => {
      if (!err) {
      	this.props.checkLogin(values.user, values.password)
      }
    });
	}
}

export default Form.create()(Header);
