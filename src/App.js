import { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./components/Card"

function App() {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const url = "https://hk-test-api.herokuapp.com/albums"
    const headers = {
      headers: {
        "X-API-Key": process.env.REACT_APP_X_API_KEY,
        Accept: "application/json",
      },
    }
    fetch(url, headers)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {
        setError(err)
        console.error("There was an error fetching data", err)
      })
  }, [])

  return (
    <div className="App">
      <CardGrid>
        <h1>Album List</h1>
        {data === null &&
          error &&
          "Oh no! There was an error loading your data."}
        {data === null && !error && "is Loading..."}
        {data !== null &&
          data.map(album => <Card key={album.id} data={album} />)}
      </CardGrid>
    </div>
  )
}

export default App

const CardGrid = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
`
