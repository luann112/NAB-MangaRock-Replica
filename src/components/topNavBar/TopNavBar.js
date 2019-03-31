import React, { PureComponent } from 'react';
import { 
  TopNavBarWrapperStyled,
  InnerWrapperStyled,
  LogoStyled,
  IconWrapperStyled,
 } from './TopNavBar.styles';
import Menu from 'src/components/menu';
import SearchBox from 'src/components/searchBox';
import Button from 'src/components/button';
import Icon from 'src/components/icon';
import SideTab from 'src/components/sideTab';

class MainLayout extends PureComponent {

  render() {
    return (
      <TopNavBarWrapperStyled>
        <InnerWrapperStyled left>
          <LogoStyled>
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
          <IconWrapperStyled>
            <Icon type="bars" />
          </IconWrapperStyled>
        </InnerWrapperStyled>
        {/* <SideTab /> */}
      </TopNavBarWrapperStyled>
    );
  }
}

export default MainLayout;
