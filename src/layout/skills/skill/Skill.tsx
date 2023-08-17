import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Skill = () => {
    return (
        <div>
            <Skill>
                <Icon iconId={'code'}/>
                <SkillTitle>HTML5</SkillTitle>
                <SkillInfo>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua Ut enim</SkillInfo>
            </Skill>
        </div>
    );
};

const StyledSkill = styled.div`
`