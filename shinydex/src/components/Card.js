import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import checkMark from '@iconify/icons-akar-icons/circle-check';
import xMark from '@iconify/icons-akar-icons/circle-x';
import { motion } from 'framer-motion';


export const Card = ({id, name, egg, evolution, photo, raid, research, wild}) => { 
  let loadingGif = require(`../gifs/pokes/${id}.gif`);
  return (
    <Container>
        <Header 
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={item} >Shiny {name}</motion.div>
            <ImageContainer as={motion.img} variants={item} src={loadingGif} />
        </Header>
        <h2>Can be found in...</h2>
        <StatContainer 
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <Blobs as={motion.div} key={1} variants={item}>
                <div>Eggs</div>
                <Icon style={{ fontSize: '2em', color: egg ? 'green' : 'red' }} icon={egg ? checkMark : xMark} />
            </Blobs>
            <Blobs as={motion.div} key={2} variants={item}>
                <div>Evolution</div>
                <Icon style={{ fontSize: '2em', color: evolution ? 'green' : 'red' }} icon={evolution ? checkMark : xMark} />
            </Blobs>
            <Blobs as={motion.div} key={3} variants={item}>
                <div>Photobombing</div>
                <Icon style={{ fontSize: '2em', color: photo ? 'green' : 'red' }} icon={photo ? checkMark : xMark} />
            </Blobs>
            <Blobs as={motion.div} key={4} variants={item}>
                <div>Raids</div>
                <Icon style={{ fontSize: '2em', color: raid ? 'green' : 'red' }} icon={raid ? checkMark : xMark} />
            </Blobs>
            <Blobs as={motion.div} key={5} variants={item}>
                <div>Research</div>
                <Icon style={{ fontSize: '2em', color: research ? 'green' : 'red' }} icon={research ? checkMark : xMark} />
            </Blobs>
            <Blobs as={motion.div} key={6} variants={item}>
                <div>Wild</div>
                <Icon style={{ fontSize: '2em', color: wild ? 'green' : 'red' }} icon={wild ? checkMark : xMark} />
            </Blobs>
        </StatContainer>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 24px;
    flex-direction: column;
    margin-top: 2em;
    gap: 1em;
    margin-bottom: 120px;
    color: white;
    text-align: center;
`
const ImageContainer = styled.img`
    display: flex;
    object-fit: contain;
    width: 100%;
    @media (max-width: 600px) {
        width: 40%;
    }
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
    gap: 1em;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    height: 300px;
    font-size: 2em;
    font-weight: bolder;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);

`

const Blobs = styled.div`
    display: flex;
    width: 100%;
    max-width: 300px;
    border-radius 18px;
    height: 2em;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    font-size: 1.25em;
    padding: 1em;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 3px solid white;
    @media (max-width: 600px) {
        width: 200px;
        font-size: 1em;
        height: 1em;
    }

`

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};
  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};