import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type WorksPropsType = {
    title: string
    info: string
    src: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={'work'}/>

            <Description>
                <Title>{props.title}</Title>
                <WorkInfo>{props.info}</WorkInfo>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 100%;

  ${Link} {
    padding: 10px 0;
  }
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`

`
const WorkInfo = styled.p`

`