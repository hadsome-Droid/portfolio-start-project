import React from 'react';

import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';

type Social = {
    name: string;
    link: string
}

type Props = {
    socialList: Array<Social>
}
export const Footer: React.FC<Props> = (props: { socialList: Array<Social> }) => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Ivan</S.Name>
                <S.SocialList>
                    {props.socialList.map((social, index) => {
                        return <S.SocialItem key={index}>
                            {
                                social.link !== ''
                                    ? <S.SocialLink href={social.link} target="_blank" rel="noopener noreferrer">
                                        <Icon height={'22'} width={'22'} viewBox={'0 0 22 22'} iconId={social.name}/>
                                    </S.SocialLink>
                                    :
                                    <S.SocialLink href={social.link}>
                                        <Icon height={'22'} width={'22'} viewBox={'0 0 22 22'} iconId={social.name}/>
                                    </S.SocialLink>
                            }

                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Zotov Ivan, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

