import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../components/avatar-selector/avatar-selector';

class BossInfo extends Component {

    state = {
        header: '',
        post: '',
        info: '',
        company: '',
        salary: ''
    }

    handleChange = (attributeName, val) => {
        this.setState({
            [attributeName]: val
        });
    }

    setHeader = (header) => {
        this.setState({header});
    }

    save = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <NavBar>Please Complete BossInfo Page</NavBar>
                <AvatarSelector setHeader={this.setHeader} />
                <InputItem onChange={val => this.handleChange('post', val)}>Job Title: </InputItem>
                <InputItem onChange={val => this.handleChange('company', val)} labelNumber={10}>Company Name: </InputItem>
                <InputItem onChange={val => this.handleChange('salary', val)}>Salary: </InputItem>
                <TextareaItem onChange={val => this.handleChange('info', val)} title='Job Description:'
                              rows={3}
                              labelNumber={10} />
                <Button onClick={this.save} type='primary'>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(BossInfo);