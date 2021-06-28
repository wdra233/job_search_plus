import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import {Redirect} from 'react-router-dom';

import {updateUser} from '../../redux/actions';
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
        this.props.updateUser(this.state);
    }


    render() {
        const {header, type} = this.props.user;
        if (header) {
            const path = type === 'Boss' ? '/boss' : '/jobseeker';
            return (<Redirect to={path}/>)
        }
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
    state => ({user: state.user}),
    {updateUser}
)(JobSeekerInfo);