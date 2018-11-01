import styled from 'styled-components';

export const TitleStyled = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  text-align: left;
  color: white;
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
    color: white;
  }
`;

export const PageStyled = styled.div`
  background: linear-gradient(0, #FC466B 0%, #3F5EFB 100%)
`;

export const ImgStyled = styled.div`
  width: 55%
  display: inline-block;
  img {
    width: 100%;
  }
`;

export const ContainerStyled = styled.div`
  padding: 0 40px;
`;

export const WaveContainerStyled = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  div {
    display: block;
    position: relative;
    height: 40px;
    background: black;

    :before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 100%;
      width: 100%;
      height: 300px;
      background-color: white;
      right: -25%;
      top: 20px
    }

    :after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 100%;
      width: 100%;
      height: 300px;
      background-color: black;
      left: -25%;
      top: -240px;
    }
  }
`;
