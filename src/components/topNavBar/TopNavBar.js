import React, { PureComponent } from 'react';
import { 
  TopNavBarWrapperStyled,
  InnerWrapperStyled,
  LogoStyled,
 } from './TopNavBar.styles';
import Menu from 'src/components/menu';
import SearchBox from 'src/components/searchBox';
import Button from 'src/components/button';

class MainLayout extends PureComponent {

  render() {
    return (
      <TopNavBarWrapperStyled>
        <InnerWrapperStyled>
          <LogoStyled>
            <img src="./static/img/mr_logo_beta.svg"/>
          </LogoStyled>
          <Menu />
        </InnerWrapperStyled>
        <InnerWrapperStyled>
          <SearchBox />
          <Button>SIGN IN</Button>
        </InnerWrapperStyled>
      </TopNavBarWrapperStyled>
    );
  }
}

export default MainLayout;
