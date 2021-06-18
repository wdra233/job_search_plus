import React, {Component} from 'react';
import { List, Grid } from 'antd-mobile';
import PropTypes from 'prop-types';
export default class AvatarSelector extends Component {
    static propTypes = {
        setHeader: PropTypes.func.isRequired,
    }

    state = {
        icon: null
    }


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

    handleHeader = (el) => {
        const {icon, text} = el;
        this.setState({icon});
        this.props.setHeader(text);
    }

    render() {
        const {icon} = this.state;
        const listHeader = icon ? <div>icon selected <img src={icon}/></div> : 'Please select an icon';
        return (
            <List renderHeader={() => listHeader}>
                <Grid onClick={el => this.handleHeader(el)}
                      data={this.headerList}
                      columnNum={5} />
            </List>
        )
    }
}
