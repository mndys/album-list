import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const url = "https://hk-test-api.herokuapp.com/albums"
    const headers = {
      headers: { "X-API-Key": "secret", Accept: "application/json" },
    }
    fetch(url, headers)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((res) => setData(res))
      .catch((err) => console.error("There was an error fetching data", err))
  }, [])

  return (
    <div className="App">
      {data === null && "is Loading..."}
      {data !== null && data.map((element) => console.log(element))}
    </div>
  )
}

export default App
