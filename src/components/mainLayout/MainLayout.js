import React, { PureComponent } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { 
  MainLayoutWrapperStyled,
  MainContentWrapperStyled,
 } from './MainLayout.styles';
 import TopNavbar from 'src/containers/topNavBar';

 import Footer from '../footer';

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return [
      <Head />,
      <MainLayoutWrapperStyled>
        <TopNavbar />
        <MainContentWrapperStyled>
          {children}
        </MainContentWrapperStyled>
        <Footer />
      </MainLayoutWrapperStyled>
    ];
  }
}

export default connect(state => state)(MainLayout);
