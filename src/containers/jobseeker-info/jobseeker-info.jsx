import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../components/avatar-selector/avatar-selector';


class JobSeekerInfo extends Component {

    state = {
        header: '',
        post: '',
        info: '',
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
                <NavBar>Please Complete JobSeeker Page</NavBar>
                <AvatarSelector setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post', val)} labelNumber={10}>Job Position: </InputItem>
                <TextareaItem onChange={val => this.handleChange('info', val)} title='Introduce yourself:'
                              rows={5}
                              labelNumber={10} />
                <Button onClick={this.save} type='primary'>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(JobSeekerInfo);