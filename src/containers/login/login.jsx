import React, {Component} from 'react';

import {
    NavBar,
    WingBlank,
    WhiteSpace,
    InputItem,
    List,
    Button
} from 'antd-mobile';

import Logo from '../../components/logo/logo'; 
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/actions';

import '../../assets/css/index.less';
class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    login = () => {
        this.props.login(this.state);
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
                    <WhiteSpace size='md'/>
                    <Button type="primary" onClick={this.login}>Login</Button>
                    <WhiteSpace />
                    <Button onClick={this.toRegister}>Don't have an account? Please register from here</Button>
                </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {login}
)(Login);