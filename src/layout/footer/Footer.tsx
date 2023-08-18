import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";


type FooterPropsType = {
    footerIcon: Array<string>
}
export const Footer = (props: { footerIcon: Array<string> }) => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialList>
                    {props.footerIcon.map((icon) => {
                        return <SocialItem>
                            <SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={icon}/>
                            </SocialLink>
                        </SocialItem>
                    })}
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-image: linear-gradient(136deg, rgb(33, 52, 83), rgba(200, 150, 200));
  min-height: 20vh;

`
const Name = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
