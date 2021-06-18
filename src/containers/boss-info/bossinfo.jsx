import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../components/avatar-selector/avatar-selector';

class BossInfo extends Component {
    render() {
        return (
            <div>
                <NavBar>Please Complete BossInfo Page</NavBar>
                <AvatarSelector />
                <InputItem>Job Title: </InputItem>
                <InputItem>Company Name: </InputItem>
                <InputItem>Salary: </InputItem>
                <TextareaItem title='Description:'
                              rows={3} />
                <Button type='primary'>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(BossInfo);