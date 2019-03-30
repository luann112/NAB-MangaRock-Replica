import React, { PureComponent } from 'react';
import Head from 'next/head';
import { 
  HomeWrapperStyled,
  LeftContentWrapperStyled,
  RightContentWrapperStyled,
 } from './styles';

class Home extends PureComponent {
  render() {
    return [
      <Head />,
      <HomeWrapperStyled>
        <LeftContentWrapperStyled></LeftContentWrapperStyled>
        <RightContentWrapperStyled></RightContentWrapperStyled>
      </HomeWrapperStyled>
    ];
  }
}

export default Home;
