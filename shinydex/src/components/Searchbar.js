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
            <div>Find your Pokemon</div>
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
    border: none;
    background-color: #ffffff;
    border-radius: 20px;

`

const Box = styled.div`
    z-index: 1;
    position: fixed;
    bottom: 0px;
    color: black;
    font-weight: bold;
    min-height: 100px;
    display: flex;
    gap: 0.2em;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    background-color: #999DAB;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding-bottom: 1em;
    backdrop-filter: blur(10px);
`

const Input = styled.input`
    width: 80%;
    height: 25px;
    border-radius: 10px;
    max-width: 250px;
    border: none;
`

const ListContainer = styled.div`
    display: flex;
    width: 80%;
    max-height: 100vh;
    overflow: auto;
    justify-content: center;
`