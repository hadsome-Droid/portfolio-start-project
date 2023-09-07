import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <StyledLogo onClick={() => {
            scroll.scrollToTop()
        }}>
            <Icon iconId={'react'}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`

`