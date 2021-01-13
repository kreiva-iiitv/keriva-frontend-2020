import React, { useState } from 'react';
import Header from '../Header';
import SideDrawer from '../SideDrawer/SideDrawer';

function Navigation() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedhandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerOpenedhandler = () => {
    setShowSideDrawer(true);
  }

    return (
      <React.Fragment>
        <Header opened={sideDrawerOpenedhandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosedhandler} />
      </React.Fragment>
    )
}

export default Navigation;
