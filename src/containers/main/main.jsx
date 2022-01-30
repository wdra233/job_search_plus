import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { getRedirectTo } from '../../utils';
import { getUser } from '../../redux/actions';
import Cookies from 'js-cookie';

import BossInfo from '../boss-info/bossinfo';
import JobSeekerInfo from '../jobseeker-info/jobseeker-info';
class Main extends Component {

    componentDidMount() {
        const userid = Cookies.get('userid');
        const {_id} = this.props.user;
        if (userid && !_id) {
            // 发送ajax请求
            this.props.getUser()
        }
    }

    render() {
        // // 只需要在main page判断有没有user._id，这样省去了再子路由中的检查
        // const {user} = this.props;
        // if (!user._id) {
        //     return (<Redirect to='/login' />)
        // }

        const userid = Cookies.get('userid');
        if (!userid) {
            return (<Redirect to='/login' />)
        }

        const {user} = this.props;

        if (!user._id) {
            return null;
        } else {
            let path = this.props.location.pathname;
            if (path === '/') {
                path = getRedirectTo(user.type, user.header);
                return <Redirect to={path} />
            }
        }

        return (
            <div>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/jobseekerinfo' component={JobSeekerInfo}/>
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {getUser}
)(Main);
