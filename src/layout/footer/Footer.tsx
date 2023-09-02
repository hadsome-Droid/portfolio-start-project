import React from 'react';

import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles';


type FooterPropsType = {
    footerIcon: Array<string>
}
export const Footer: React.FC<FooterPropsType> = (props: { footerIcon: Array<string> }) => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>
                    {props.footerIcon.map((icon, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={icon}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

