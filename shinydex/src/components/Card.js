import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import checkMark from '@iconify/icons-akar-icons/circle-check';
import xMark from '@iconify/icons-akar-icons/circle-x';


export const Card = ({id, name, egg, evolution, photo, raid, research, wild}) => { 
  let loadingGif = require(`../gifs/pokes/${id}.gif`);
  return (
    <Container>
        <Header>
            <div>{name}</div>
            <ImageContainer src={loadingGif} />
        </Header>
        <h2>Can be found in...</h2>
        <StatContainer>
            <Blobs>
                <div>Eggs</div>
                <Icon style={{ fontSize: '2em', color: egg ? 'green' : 'red' }} icon={egg ? checkMark : xMark} />
            </Blobs>
            <Blobs>
                <div>Evolution</div>
                <Icon style={{ fontSize: '2em', color: evolution ? 'green' : 'red' }} icon={evolution ? checkMark : xMark} />
            </Blobs>
            <Blobs>
                <div>Photobombing</div>
                <Icon style={{ fontSize: '2em', color: photo ? 'green' : 'red' }} icon={photo ? checkMark : xMark} />
            </Blobs>
            <Blobs>
                <div>Raids</div>
                <Icon style={{ fontSize: '2em', color: raid ? 'green' : 'red' }} icon={raid ? checkMark : xMark} />
            </Blobs>
            <Blobs>
                <div>Research</div>
                <Icon style={{ fontSize: '2em', color: research ? 'green' : 'red' }} icon={research ? checkMark : xMark} />
            </Blobs>
            <Blobs>
                <div>Wild</div>
                <Icon style={{ fontSize: '2em', color: wild ? 'green' : 'red' }} icon={wild ? checkMark : xMark} />
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
    margin-bottom: 150px;
    color: #00092D;
`
const ImageContainer = styled.img`
    display: flex;
    object-fit: contain;
    width: 100%;
    height: 300px;
    
`

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    border-radius: 24px;
    font-size: 2em;
    font-weight: bolder;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);

`

const Blobs = styled.div`
    display: flex;
    width: 90%;
    border-radius 18px;
    height: 2em;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    font-size: 1em;
    padding: 1em;
    color: #ffffff;
    background-color: #00092D;
    backdrop-filter: blur(5px);
    border: 2px solid white;

`
