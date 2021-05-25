import { useEffect, useState } from "react"
import axios from "axios"
import ListItem from "./components/ListItem"
import styled from "styled-components/macro"

function App() {
  const url = "https://hk-test-api.herokuapp.com/albums/"
  const headers = {
    headers: {
      "X-API-Key": process.env.REACT_APP_X_API_KEY,
      Accept: "application/json",
    },
  }
  const [status, setStatus] = useState({
    data: null,
    error: null,
    isLoading: false,
  })

  useEffect(() => {
    fetchGet(url, headers, status, setStatus)
  }, [])

  async function fetchGet(url, headers, status, setStatus) {
    const newStatus = { ...status, isLoading: true }
    setStatus(newStatus)
    try {
      const res = await axios(url, headers)
      newStatus.data = await res.data
      await setStatus(newStatus)
    } catch (error) {
      newStatus.error = await error.message
      await setStatus(newStatus)
      console.error(error)
    } finally {
      setStatus({ ...newStatus, isLoading: false })
    }
  }

  async function deleteOne(id) {
    const deleteUrl = url + id
    const headers = {
      headers: {
        "X-API-Key": process.env.REACT_APP_X_API_KEY,
        "Content-Type": "application/json",
      },
    }
    const newStatus = { ...status, isLoading: true }
    setStatus(newStatus)
    try {
      await axios.delete(deleteUrl, headers)
      newStatus.data = status.data.filter(date => date.id !== id)
      newStatus.error = null
      setStatus(newStatus)
    } catch (error) {
      newStatus.error = await error.message
      console.error("There was an error deleting data:", error)
      setStatus(newStatus)
    } finally {
      setStatus({ ...newStatus, isLoading: false })
    }
  }

  function editOne(event, id) {
    console.log(`handleEdit: Element ${id} clicked!`, event)
  }

  return (
    <List className="App">
      <h1>Album List</h1>
      {status.data && status.data.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                <h2>Edit</h2>
              </th>
              <th>
                <h2>Album</h2>
              </th>
              <th>
                <h2>Artist</h2>
              </th>
              <th>
                <h2>Year</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {status.data.map(album => (
              <ListItem
                key={album.id}
                data={album}
                handleDelete={deleteOne}
                handleEdit={editOne}
              />
            ))}
          </tbody>
        </table>
      )}
      {status.data &&
        status.data.length === 0 &&
        "There are no objects in your database yet."}
      {status.isLoading && "is Loading..."}
      {status.error && "Oh no! There was an error loading your data."}
    </List>
  )
}

export default App

const List = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1vh 5vw;
  display: grid;
  grid-template-columns: 1fr;

  table {
    border-collapse: collapse;
  }

  thead {
    border-bottom: 2px dotted var(--color-primary-dark);
  }

  tbody {
    tr {
      :nth-child(even) {
        background-color: var(--color-platinum);
      }
      :hover {
        background-color: var(--color-secondary);
        color: white;

        h3 {
          color: white;
        }
      }
    }
  }
`
