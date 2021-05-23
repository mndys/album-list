import { useEffect, useState } from "react"

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
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {
        setError(err)
        console.error("There was an error fetching data", err)
      })
  }, [])

  return (
    <div className="App">
      {data === null && error && "Oh no! There was an error loading your data."}
      {data === null && !error && "is Loading..."}
      {data !== null && (
        <ul>
          {data.map(({ id, title, artist, released_in }) => (
            <li key={id}>
              <h1>{title}</h1>
              <span>{artist}</span>
              <span>({released_in})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
