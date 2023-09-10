import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: 'code',
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typescript',
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styled-components',
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
            ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade={true} delay={0.2} direction={'right'}>
                        {skillData.map((s, index) => {
                            return (
                                <Skill key={index} iconId={s.iconId} title={s.title} description={s.description}/>
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

