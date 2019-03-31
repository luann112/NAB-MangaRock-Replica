import React, { Component } from 'react';
import Router from 'next/router';
import Footer from 'src/components/footer';
import {
  HomeWrapperStyled,
  MainContentWrapperStyled,
  SubContentWrapperStyled
} from './Home.styles';
import TrendingUpdates from './trendingUpdates';
import BrowseByGenres from './browseByGenres';

class Home extends Component {
  render() {
    return ([
      <HomeWrapperStyled className="container" key="container">
        <MainContentWrapperStyled>
          <TrendingUpdates />
        </MainContentWrapperStyled>
        <SubContentWrapperStyled>
          <BrowseByGenres />
        </SubContentWrapperStyled>
      </HomeWrapperStyled>,
      <Footer key="footer"/>      
    ]
    );
  }
}

export default Home;