import React, { useEffect } from "react";
import { useState } from 'react';
import { Page, Flex } from "./components/styles/body.styled";
import { Card } from "./components/Card";
import { Searchbar } from "./components/Searchbar";
import { Loading } from "./components/Loading";
import { Firstload } from "./components/Firstload";
import { Transition } from "./components/Transition";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [store, setStore] = useState({});
  const [found, setFound] = useState(false);
  const [first, setFirst] = useState(true);
  const [transition, setTransition] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
        findPokemon(event.target.value);
    }
  }

  const setTimer = () => (setTimeout(() => {
    setTransition(false);
  }, 3500));

  const findPokemon = (props) => {
    setTransition(true);
    setTimer();
    setFound(false);
    data && Object.keys(data).map(key => {
      if (data[key]["name"].toLowerCase() === props.toLowerCase()){
        let fetchedPokemon = data[key];
        setStore(fetchedPokemon);
        setFound(true);
        setFirst(false);
      }
    }
    )
  }

  

  useEffect(() => {

  const getData = async () => {
    try {
      const response = await fetch(
        `https://pogoapi.net/api/v1/shiny_pokemon.json`
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      
      setError(null);

    } catch(err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }  
  }
  getData()
}, [])

return(
  <div>
    {loading ? (<Loading />) : (
    first ? (
    <>
      <Firstload />
      <Searchbar data={data} findPokemon={findPokemon} handleKeyDown={handleKeyDown}/>
    </>
    ) : ( transition ? (<Transition />) : (
    <Page>
      {data && <Searchbar data={data} findPokemon={findPokemon} handleKeyDown={handleKeyDown} />}
      <Flex>
      {found ? <Card 
                  id={store.id}
                  name={store.name} 
                  egg={store.found_egg}
                  evolution={store.found_evolution}
                  photo={store.found_photobomb}
                  raid={store.found_raid}
                  wild={store.found_wild}
                  research={store.found_research}/> : null}
      </Flex>
    </Page>
    )))
  }
  </div>
)

}

export default App;
