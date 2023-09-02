import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import Social from '../../../assets/images/proj-1_1.webp'
import Timer from '../../../assets/images/proj-2_1.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';

const workData = [
    {
        title: 'Social Network',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: Social
    },
    {
        title: 'Timer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        src: Timer
    },

]

const worksItems = ['All', 'landing page', 'React', 'spa']
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'} gap={'30px'}>
                    {workData.map((w, index) => {
                        return (
                            <Work key={index}
                                  title={w.title}
                                  info={w.info}
                                  src={w.src}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
