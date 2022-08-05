import React from 'react'
import styled from 'styled-components'

export const Card = ({name, egg, evolution, photo, raid, research, wild}) => {
  return (
    <Container>
        <Header>
            <div>{name}</div>
        </Header>
        <StatContainer>
            <Blobs>
                <div>Found in Eggs</div>
                <div>{egg ? "Yes" : "No"}</div>
            </Blobs>
            <Blobs>
                <div>Found in Evolution</div>
                <div>{evolution ? "Yes" : "No"}</div>
            </Blobs>
            <Blobs>
                <div>Found in Photobombing</div>
                <div>{photo ? "Yes" : "No"}</div>
            </Blobs>
            <Blobs>
                <div>Found in Raids</div>
                <div>{raid ? "Yes" : "No"}</div>
            </Blobs>
            <Blobs>
                <div>Found in Research</div>
                <div>{research ? "Yes" : "No"}</div>
            </Blobs>
            <Blobs>
                <div>Found in the Wild</div>
                <div>{wild ? "Yes" : "No"}</div>
            </Blobs>
        </StatContainer>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    width: 400px;
    height: 100%;
    border-radius: 24px;
    flex-direction: column;
    margin-top: 2em;
    gap: 1em;
`

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    margin-bottom: 1em;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 500px;
    border-radius: 24px;
    border: 2px solid red;
    font-size: 2em;
    font-weight: bold;
    color: black;
`

const Blobs = styled.div`
    display: flex;
    width: 100%;
    min-width: 90%;
    border-radius 24px;
    height: 2em;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1em;
    padding: 1em;
    color: black;
    background-color: white;
    box-shadow: 3px 3px 10px black;

`
