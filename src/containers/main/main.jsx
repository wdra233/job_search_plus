import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import BossInfo from '../boss-info/bossinfo';
import JobSeekerInfo from '../jobseeker-info/jobseeker-info';
export default class Main extends Component {
    render() {
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