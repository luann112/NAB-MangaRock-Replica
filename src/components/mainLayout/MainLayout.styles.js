import styled from 'styled-components';

export const MainLayoutWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContentWrapperStyled = styled.section`
  background-color: #f5f5f5;
  flex-grow: 1;
  .container {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 1320px) {
    .container {
      width: 1260px;
    }
  }
  @media (max-width: 992px) {
    .container {
      width: 960px;
    }
  }
  @media (max-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (max-width: 576px) {
    .container {
      width: 540px;
    }
  }
`;