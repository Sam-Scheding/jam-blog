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
          <TitleStyled>Brb... We're writing a huge line of <span>CODE</span></TitleStyled>
          <p>A collaborative blog project by Sam Scheding and Jae-Hee Park</p>
        </ContentStyled>
      </ContainerStyled>
      <Wave />
    </PageStyled>
  );

export default Homepage
