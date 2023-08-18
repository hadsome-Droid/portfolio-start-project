import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};
const StyledSlogan = styled.section`
  min-height: 30vh;
  background-image: linear-gradient(136deg, rgb(33, 52, 83), rgba(200, 150, 200));
  
`