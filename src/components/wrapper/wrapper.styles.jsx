import styled from 'styled-components';

export const WrapperStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`