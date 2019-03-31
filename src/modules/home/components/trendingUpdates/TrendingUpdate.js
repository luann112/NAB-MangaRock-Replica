import React, { Component } from 'react';
import { 
  TrendingUpdateWrapperStyled,
  StatusTextStyles,
  LabelStyled,
  MangaCardWrapperStyled,
} from './TrendingUpdate.styles';
import MangaCard from 'src/components/mangaCard';
class TrendingUpdate extends Component {
  render() {
    return (
      <TrendingUpdateWrapperStyled>
        <StatusTextStyles>In the last few hours</StatusTextStyles>
        <LabelStyled>
          <h2>Trending Updates</h2>
          <a>View All</a>
        </LabelStyled>
        <MangaCardWrapperStyled>
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />          
        </MangaCardWrapperStyled>
      </TrendingUpdateWrapperStyled>
    );
  }
}

export default TrendingUpdate;