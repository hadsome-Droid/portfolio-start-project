import React from 'react';
import styled from "styled-components";

type WorksPropsType = {
    title: string
    info: string
    src: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={'work'}/>
            <Title>{props.title}</Title>
            <WorkInfo>{props.info}</WorkInfo>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: rgba(185, 169, 199, 0.68);
  max-width: 540px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Link = styled.a`
`
const WorkInfo = styled.p`

`