import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../components/avatar-selector/avatar-selector';


class JobSeekerInfo extends Component {
    render() {
        return (
            <div>
                <NavBar>Please Complete JobSeeker Page</NavBar>
                <AvatarSelector />
                <InputItem labelNumber={10}>Job Position: </InputItem>
                <TextareaItem title='Introduce yourself:'
                              rows={5}
                              labelNumber={10} />
                <Button type='primary'>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(JobSeekerInfo);