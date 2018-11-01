import React from "react";
import { NavStyled, ListStyled, UlStyled, ContainerStyled } from './NavStyled';
const Nav = () =>
  (
    <ContainerStyled>
      <UlStyled>
        <ListStyled>
          <a href="/">Home</a>
        </ListStyled>
        <ListStyled>
          <a href="/">Blog</a>
        </ListStyled>
        <ListStyled>
          <a href="/">API</a>
        </ListStyled>
        <ListStyled>
          <a href="/">API Docs</a>
        </ListStyled>
      </UlStyled>
    </ContainerStyled>
  );

export default Nav
