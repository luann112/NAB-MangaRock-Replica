import styled from 'styled-components';

export const MangaCardWrapperStyled = styled.div`
  display: inline-block;
  padding: 8px;
  padding-bottom: 12px;
  border-radius: 4px;
  transition: background-color .15s ease;
  vertical-align: top;
  position: relative;
  width: calc(20% - 3.2px);
  cursor: pointer;
  transition: background-color .15s ease;
  &:hover {
    background-color: rgba(0,0,0,.08);
  }
`;

export const ThumbnailStyled = styled.div`
  display: block;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,.12);
  position: relative;
  width: 100%;
  /* padding-bottom: 150%; */
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MangaLinkStyled = styled.div`
  color: rgba(0,0,0,.87);
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  overflow: hidden;
  max-height: 38px;
  text-overflow: ellipsis;
  margin-bottom: 2px;
  &:hover {
    color: #29b6f6;
    text-decoration: underline;
  }
`;

export const NewestUpdateStyled = styled.div`
  display: flex;
  color: rgba(0,0,0,.54);
  font-size: .875rem;
  font-weight: 400;
  line-height: 16px;
  &:hover {
    color: #29b6f6;
    text-decoration: underline;
  }
`;

export const StatusIndicatorWrapperStyled = styled.div`
  font-size: .875rem;
  font-weight: 400;
  line-height: 16px;
`;

export const StatusIndicatorStyled = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #29b6f6;
  border-radius: 50%;
  margin-right: 4px;
`;

export const NewestChapterStyled = styled.div`
  max-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
`;