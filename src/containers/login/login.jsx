import React, {Component} from 'react';

import {
    NavBar,
    WingBlank,
    WhiteSpace,
    InputItem,
    Button
} from 'antd-mobile';

import Logo from '../../components/logo/logo'; 

export default class Register extends Component {
    state = {
        username: '',
        password: '',
    };

    login = () => {
        console.log(this.state);
    }

    handleChange = (attributeName, val) => {
        this.setState({
            [attributeName]: val
        });
    }

    toRegister = () => {
        this.props.history.replace('/register');
    }
    
    render() {
        return (
            <div>
                <NavBar>Job Radar</NavBar>
                <WhiteSpace />
                <Logo />
                <WingBlank>
                <InputItem onChange={val => this.handleChange('username', val)}>username: </InputItem>
                <WhiteSpace />
                <InputItem type='password' onChange={val => this.handleChange('password', val)}>password: </InputItem>
                <WhiteSpace size='md'/>
                <Button type="primary" onClick={this.login}>Login</Button>
                <WhiteSpace />
                <Button onClick={this.toRegister}>Don't have an account? Please register from here</Button>
                </WingBlank>
            </div>
        )
    }
}