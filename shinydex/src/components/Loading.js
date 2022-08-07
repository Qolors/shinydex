import React from 'react';
import loader from './styles/loader.gif';
import styled from 'styled-components';

export const Loading = () => {

    return (
        <LoadPage>
            <img src={loader} alt="Loading" />
            <div>Gathering Shiny..</div>

        </LoadPage>
    )
}



const LoadPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: white;
    object-fit: contain;
    flex-direction: column;
    font-size: 2em;
`