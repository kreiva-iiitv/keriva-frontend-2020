import React, {Component} from 'react';
import Header from '../Header';
import SideDrawer from '../SideDrawer/SideDrawer';

class Navigation extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedhandler = () => {
            this.setState({showSideDrawer: false})
    }

    sideDrawerOpenedhandler = () => {
        this.setState({showSideDrawer: true})
}

    render() {
        return(
            <div>
                <Header opened={this.sideDrawerOpenedhandler }/>
                <SideDrawer open ={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler } />
            </div>
            
        )
    }
}

export default Navigation;