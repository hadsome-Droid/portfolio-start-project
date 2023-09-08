import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {ArrowUp} from "../../assets/images/ArrowUp";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <ArrowUp/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  //padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`