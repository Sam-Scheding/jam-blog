import React from "react";
import key from "weak-key";
import Nav from '../Nav/nav.js'
import Wave from '../Wave/Wave.js'
import { TitleStyled, PageStyled, ImgStyled, ContentStyled, WaveContainerStyled, ContainerStyled } from './HomepageStyled';
const Homepage = () =>
  (
    <PageStyled>
      <ContainerStyled>
        <Nav />
        <ContentStyled>
          <TitleStyled>Hello, we are <span>JAM</span></TitleStyled>
          <p>A collaborative blog project made by Sam Scheding and Jae-Hee Park</p>
        </ContentStyled>
        <ImgStyled><img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/56/cj/p056cj5w.jpg"/></ImgStyled>
      </ContainerStyled>
      <Wave />
    </PageStyled>
  );

export default Homepage
