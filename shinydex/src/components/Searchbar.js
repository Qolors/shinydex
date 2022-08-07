import React, { useState } from 'react'
import styled from 'styled-components';

export const Searchbar = ({ data, handleKeyDown, findPokemon }) => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    

    const List = () => {
        return (

            <ListContainer>
                {data && Object.keys(data).map(key => {
                    let pokemon = data[key]["name"];
                    let lowerPokemon = pokemon.toLowerCase();
                    
                    return (
                        value !== '' && lowerPokemon.includes(value.toLowerCase()) && <Selection onClick={() => findPokemon(lowerPokemon)} key={lowerPokemon}>{pokemon}</Selection>
                    )
                    })}
            </ListContainer>
        )
    }
    return (
        <Box>
            <h2>Find your Pokemon</h2>
            <Input type="text" value={value} onKeyDown={handleKeyDown} onChange={onChange} />
            <List />
        </Box>
    )
}



const Selection = styled.button`
    display: flex;
    width: 100%;
    min-width: 250px;
    max-width: 300px;
    height: 50px;
    padding: 1em;
    font-size: 1em;
    font-weight: bolder;
    justify-content: center;
    margin: 0.5em;
    border: 2px solid white;
    background-image: linear-gradient(to right, #6441A5 0%, #2a0845  51%, #6441A5  100%);
    background-size: 200% 100%;
    border-radius: 20px;
    color: white;
    transition: .5s ease-out;
    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
        cursor: pointer;
      }
      
`

const Box = styled.div`
    z-index: 1;
    position: fixed;
    bottom: 0px;
    color: white;
    font-weight: bold;
    min-height: 50px;
    display: flex;
    gap: 0.2em;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #24243e;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding-bottom: 1em;
    backdrop-filter: blur(10px);
`

const Input = styled.input`
    width: 80%;
    height: 25px;
    background-color: gray;
    border-radius: 10px;
    max-width: 250px;
    border: none;
    color: white;
    font-size: 1em;
`

const ListContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 100vh;
    overflow: auto;
    justify-content: center;
`

