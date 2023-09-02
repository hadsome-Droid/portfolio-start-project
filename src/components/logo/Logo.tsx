import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo: React.FC = () => {
    return (
        <StyledLogo>
            <Icon iconId={'react'}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`

`