import React from 'react';
import first from './styles/first.gif';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-akar-icons/arrow-down';

export const Firstload = () => {

    return (
        <LoadPage>
            <LandingImage src={first} alt="Loading" />
            <LeadingText>Welcome to ShinyDex!</LeadingText>
            <Desc>A quick reference resource on how to catch available Shiny Pokemon.</Desc>
            <Desc>Search below to get started!</Desc>
            <Icon style={{ fontSize: '2em', color: 'yellow' }} icon={arrowDown} />

        </LoadPage>
    )
}



const LoadPage = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    color: white;
    flex-direction: column;
    font-size: 1em;
    width: 70%;
    margin: auto;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const Desc = styled.p`
    font-size: 1em;
    max-width: 90%;
    font-weight: bold;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 1em;
    }
`

const LandingImage = styled.img`
    display: flex;
    object-fit: contain;
    max-width: 90%;

`

const LeadingText = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`