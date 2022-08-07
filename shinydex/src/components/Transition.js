import React from 'react'
import styled from 'styled-components'
import transitionGif from './styles/transition.gif'
import { motion } from 'framer-motion'

export const Transition = () => {
  return (
    <LoadPage 
        as={motion.div}
        variants={container}
        initial="offset"
        animate="center" 
    >
        <img src={transitionGif} alt="Loading" />
        <div>{facts["2"]["fact"]}</div>
    </LoadPage>
  )
}


const LoadPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 90%;
    text-align: center;
    color: white;
    object-fit: contain;
    flex-direction: column;
    font-size: 1.5em;
`

const container = {
    offset: { x: -500 },
    center: { x: 0 },
};


const facts = {

    "1" : {
        "fact" : "Build your XP first, then power-up Pokemon"
    },
    "2" : {
        "fact" : "Turn off AR mode for easier catch attempts"
    },
    "3" : {
        "fact" : "Rename your Eevee to the Evolution you desire"
    },
    "4" : {
        "fact" : "Transfer your extra Pokemon for Candies"
    },
}