import React, {Component} from 'react';
import { List, Grid } from 'antd-mobile';

export default class AvatarSelector extends Component {

    constructor(props) {
        super(props);
        this.headerList = [];
        for (let i = 0; i < 20; i++) {
            this.headerList.push({
                text: 'icon' + (i + 1),
                icon: require(`../../assets/images/icon${i + 1}.png`)
            })
        }
    }

    render() {
        const listHeader = 'Please select an icon';
        return (
            <List renderHeader={() => listHeader}>
                <Grid data={this.headerList}
                      columnNum={5} />
            </List>
        )
    }
}
