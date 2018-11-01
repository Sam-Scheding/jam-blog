import styled from 'styled-components';

export const ListStyled = styled.li`
  width: auto;
  padding: 20px;
  a {
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    color: #9297b4;
    :hover, :active {
      color: #ef4b6c;
    }
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`;

export const ContainerStyled = styled.div`
  width: 100%;
`;
