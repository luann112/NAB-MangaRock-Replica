import styled from 'styled-components';

export const SearchBoxWrapperStyled = styled.div`
  width: 300px;
  display: flex;
  padding-right: 4px;
  padding-left: 8px;
  margin-right: 12px;
  height: 40px;
  background-color: #fafafa;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 2px;
`;

export const SearchIconStyled = styled.div`
  padding: 0 5px;
  i {
    color: rgba(0,0,0,.54);
    font-size: 24px;
  }
`;
export const SearchInputStyled = styled.input`
  flex: 1;
  background-color: #fafafa;
  font-weight: 400;
  line-height: 16px;
  vertical-align: super;
  border: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  outline: none;
  margin-left: 4px;
  color: rgba(0,0,0,.87);
  font-size: 16px;
  ::placeholder {
    opacity: 0.5;
  }
`;
export const ClearInputButtonStyled = styled.div`
  padding: 0 5px;
  cursor: pointer;
  i {
    color: rgba(0,0,0,.54);
    font-size: 24px;
  }
`;