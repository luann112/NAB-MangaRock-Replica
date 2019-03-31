import styled from 'styled-components';

export const MainLayoutWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContentWrapperStyled = styled.section`
  background-color: #f5f5f5;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-family: 'Roboto';
  .container {
    flex: 1;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1320px) {
    .container {
      max-width: 1260px;
    }
  }
`;