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

    render() {
        return (
            <div>
                <NavBar>Please Complete BossInfo Page</NavBar>
                <AvatarSelector />
                <InputItem>Job Title: </InputItem>
                <InputItem labelNumber={10}>Company Name: </InputItem>
                <InputItem>Salary: </InputItem>
                <TextareaItem title='Job Description:'
                              rows={3}
                              labelNumber={10} />
                <Button type='primary'>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(BossInfo);