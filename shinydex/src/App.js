import React, { useEffect } from "react";
import { useState } from 'react';
import { Page, Flex } from "./components/styles/body.styled";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  <Page>
    {data && Object.keys(data).map(key => {
      return(
      <Flex>{data[key]["found_egg"] ? 'Yes!' : 'No!'}</Flex>
      )
    })}
  </Page>
)

}

export default App;
