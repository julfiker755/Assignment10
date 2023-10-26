import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footder from '../../Shared/Footder/Footder';

const Layout = () => {
    return (
        <>
         <Header></Header>
          <Outlet></Outlet>
          <Footder></Footder>
        </>
    );
};

export default Layout;