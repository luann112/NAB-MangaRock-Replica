import styled from 'styled-components';

export const HomeWrapperStyled = styled.div`
  display: flex;
`;

export const MainContentWrapperStyled = styled.div`
  padding: 0 10px;
  @media (min-width: 992px) {
    flex: 0 0 ${(2/3)*100}%;
    max-width: ${(2/3)*100}%;
  }
`;

export const SubContentWrapperStyled = styled.div`
  padding: 0 10px;
  @media (min-width: 992px) {
    flex: 0 0 ${(1/3)*100}%;
    max-width: ${(1/3)*100}%;
  }
`;