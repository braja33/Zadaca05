import React from "react";
import styled, { keyframes } from "styled-components";

const ldsRingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(33, 33, 33, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const LdsRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const Ring = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
    animation-delay: ${(props) => props.$delay};
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <LdsRing>
                <Ring $delay="-0.45s" />
                <Ring $delay="-0.3s" />
                <Ring $delay="-0.15s" />
                <Ring />
            </LdsRing>
        </LoaderContainer>
    );
};

export default Loader;
