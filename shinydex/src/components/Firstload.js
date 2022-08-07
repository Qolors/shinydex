import React from 'react';
import first from './styles/first.gif';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-akar-icons/arrow-down';

export const Firstload = () => {

    return (
        <LoadPage>
            <img src={first} alt="Loading" />
            <h2>Welcome to ShinyDex!</h2>
            <Desc>A quick reference resource on how to catch available Shiny Pokemon.</Desc>
            <Desc>Search below to get started!</Desc>
            <Icon icon={arrowDown} />

        </LoadPage>
    )
}



const LoadPage = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    color: white;
    object-fit: contain;
    flex-direction: column;
    font-size: 1em;
    width: 70%;
    margin: auto;
`

const Desc = styled.p`
    font-size: 1em;
    max-width: 75%;
    font-weight: bold;
    text-align: center;
`