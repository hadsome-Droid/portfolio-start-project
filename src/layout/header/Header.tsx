import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-image: linear-gradient(136deg, rgb(33, 52, 83), rgba(200, 150, 200));
  display: flex;
  justify-content: space-between;

  a {
    color: snow;
  }
`