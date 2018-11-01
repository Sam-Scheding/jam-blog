import styled from 'styled-components';

export const TitleStyled = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  text-align: left;
  color: black;
  margin: 0;
  display: inline-block;
  span {
    color: #ef4b6c;
  }
`;

export const ContentStyled = styled.div`
  vertical-align: top;
  width: 40%;
  margin: 0 5% 0 0;
  display: inline-block;

  p {
    letter-spacing: 1.1px;
    line-height: 1.5;
    font-family: 'Noto Sans', sans-serif;
    color: #9297b4;
  }
`;

export const PageStyled = styled.div`
  padding: 0 40px;
`;

export const ImgStyled = styled.div`
  width: 55%
  display: inline-block;
  img {
    width: 100%;
  }
`;
