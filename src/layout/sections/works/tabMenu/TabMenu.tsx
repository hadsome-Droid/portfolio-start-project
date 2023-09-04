import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {
                            props.changeFilterStatus(item.status)
                        }}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 353px;
    width: 100%;
    margin: 0 auto 40px;
  }

`
const ListItem = styled.li`

`
