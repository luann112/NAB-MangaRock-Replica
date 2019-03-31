import styled from 'styled-components';

export const TrendingUpdateWrapperStyled = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.14);
  margin-bottom: 20px;
`;

export const StatusTextStyles = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: #ff5722;
  margin-bottom: -8px;
`;

export const LabelStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
  h2 {
    color: rgba(0,0,0,.87);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 28px;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
  }
  a {
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 500;
    color: #29b6f6;
    margin-left: auto;
    text-transform: uppercase;
    line-height: 1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MangaCardWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  flex-flow: row wrap;
`;