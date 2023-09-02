import React from 'react';

import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';

type WorksPropsType = {
    title: string
    info: string
    src: string
}

export const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={'work'}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.WorkInfo>{props.info}</S.WorkInfo>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};
