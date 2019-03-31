import React, { Component } from 'react';
import Router from 'next/router';
import {
  MangaCardWrapperStyled,
  ThumbnailStyled,
  MangaLinkStyled,
  NewestUpdateStyled,
  StatusIndicatorWrapperStyled,
  StatusIndicatorStyled,
  NewestChapterStyled,
} from './MangaCard.styled';

class MangaCard extends Component {
  toMangaPage = () => {
    Router.push('/manga/')
  }
  render() {
    return (
      <MangaCardWrapperStyled onClick={this.toMangaPage}>
        <ThumbnailStyled>
          <img src="./static/img/manga_pic.jpg"/>
        </ThumbnailStyled>
        <MangaLinkStyled>Romeo nen Juliet</MangaLinkStyled>
        <NewestUpdateStyled>
          <StatusIndicatorWrapperStyled>
            <StatusIndicatorStyled></StatusIndicatorStyled>
          </StatusIndicatorWrapperStyled>
          <NewestChapterStyled>Vol.12 Chapter 98: Romeo nen Juliet</NewestChapterStyled>
        </NewestUpdateStyled>
      </MangaCardWrapperStyled>
    );
  }
}

export default MangaCard;