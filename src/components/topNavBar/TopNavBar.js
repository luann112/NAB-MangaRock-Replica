import React, { PureComponent } from 'react';
import Router from 'next/router';
import { 
  TopNavBarWrapperStyled,
  TopNavBarStyled,
  InnerWrapperStyled,
  LogoStyled,
  IconWrapperStyled,
 } from './TopNavBar.styles';
import Menu from 'src/components/menu';
import SearchBox from 'src/components/searchBox';
import Button from 'src/components/button';
import Icon from 'src/components/icon';
import SideTab from 'src/containers/sideTab';

class MainLayout extends PureComponent {

  openSideTab = () => {
    const { openSideTab } = this.props;
    console.log( 'openSideTab - ', openSideTab, this.props);
    if (openSideTab && typeof openSideTab === 'function') {
      openSideTab();
    }
  }

  toHome = () => {
    Router.push('/')
  }

  render() {
    return (
      <TopNavBarWrapperStyled>
        <TopNavBarStyled>
          <InnerWrapperStyled left>
            <LogoStyled onClick={this.toHome}>
              <img src="./static/img/mr_logo_beta.svg"/>
            </LogoStyled>
            <Menu />
          </InnerWrapperStyled>
          <InnerWrapperStyled right>
            <SearchBox />
            <Button>SIGN IN</Button>
          </InnerWrapperStyled>
          <InnerWrapperStyled inSmallScreen>
            <IconWrapperStyled>
              <Icon type="search" />
            </IconWrapperStyled>
            <IconWrapperStyled onClick={this.openSideTab}>
              <Icon type="bars" />
            </IconWrapperStyled>
          </InnerWrapperStyled>
          <SideTab />
        </TopNavBarStyled>
      </TopNavBarWrapperStyled>
 
    );
  }
}

export default MainLayout;
