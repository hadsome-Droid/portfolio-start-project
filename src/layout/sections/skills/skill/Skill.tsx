import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";


type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillInfo>{props.description}</SkillInfo>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(179, 151, 139, 0.71);
  margin: 2px;
`

const SkillTitle = styled.h3`
`

const SkillInfo = styled.p`

`