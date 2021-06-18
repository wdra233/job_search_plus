import React, {Component} from 'react';

import {
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Radio,
    Button
} from 'antd-mobile';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../redux/actions';

import Logo from '../../components/logo/logo'; 
import '../../assets/css/index.less';

class Register extends Component {
    state = {
        username: '',
        password: '',
        confirmed: '',
        type: 'Boss'
    };

    register = () => {
        this.props.register(this.state);
    }

    handleChange = (attributeName, val) => {
        this.setState({
            [attributeName]: val
        });
    }

    toLogin = () => {
        this.props.history.replace('/login');
    }
    
    render() {
        const {type} = this.state;
        const {msg, redirectTo} = this.props.user;
        if (redirectTo) {
            return (<Redirect to={redirectTo} />)
        }
        return (
            <div>
                <NavBar>Job Radar</NavBar>
                <WhiteSpace />
                <Logo />
                <WingBlank>
                <List>
                    {msg ? <div className='error-msg'>{msg}</div> : null}
                    <InputItem onChange={val => this.handleChange('username', val)}>username: </InputItem>
                    <WhiteSpace />
                    <InputItem type='password' onChange={val => this.handleChange('password', val)}>password: </InputItem>
                    <WhiteSpace />
                    <InputItem type='password' onChange={val => this.handleChange('confirmed', val)}>Confirm: </InputItem>
                    <WhiteSpace />
                    <List.Item>
                        <span>User type: </span>
                        <Radio checked={type ==='Job Seeker'} onChange={() => this.handleChange('type', 'Job Seeker')}>Job Seeker</Radio>
                        &nbsp;&nbsp;
                        <Radio checked={type ==='Boss'} onChange={() => this.handleChange('type', 'Boss')}>Boss</Radio>
                    </List.Item>
                    <WhiteSpace size='md'/>
                    <Button type="primary" onClick={this.register}>Register</Button>
                    <WhiteSpace />
                    <Button onClick={this.toLogin}>Already have an account?</Button>
                </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register);