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

import Logo from '../../components/logo/logo'; 

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        confirmed: '',
        type: 'Boss'
    };

    register = () => {
        console.log(this.state);
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
        return (
            <div>
                <NavBar>Job Radar</NavBar>
                <WhiteSpace />
                <Logo />
                <WingBlank>
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
                </WingBlank>
            </div>
        )
    }
}