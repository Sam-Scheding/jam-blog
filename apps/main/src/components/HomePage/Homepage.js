import React from "react";
import key from "weak-key";
import Nav from '../Nav/nav.js'
import { TitleStyled } from './HomepageStyled';
const Homepage = () =>
  (
    <div>
      <Nav />
      <TitleStyled>This Shit is Bananas</TitleStyled>
    </div>
  );

export default Homepage
