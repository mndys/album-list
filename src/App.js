import { useState } from "react"
import axios from "axios"
import ListItem from "./components/ListItem"
import styled from "styled-components/macro"
import Modal from "./components/Modal"
import toast, { Toaster } from "react-hot-toast"
import useFetchGet from "./hooks/useFetchGet.jsx"

function App() {
  const url = "https://hk-test-api.herokuapp.com/albums/"
  const [status, setStatus] = useState({
    data: null,
    error: null,
    isLoading: false,
  })
  const [currentAlbumId, setCurrentAlbumId] = useState(null)

  // Get Data from API on load
  useFetchGet(url, setStatus)

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          style: {
            color: "var(--color-primary-dark)",
            transform: "translate(0, -20%)",
          },
        }}
      />
      {currentAlbumId && (
        <Modal
          status={status}
          id={currentAlbumId}
          handleEdit={editOne}
          handleClose={closeModal}
        />
      )}
      <List>
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
                  handleEdit={showEditModal}
                />
              ))}
            </tbody>
          </table>
        )}
        {status.data &&
          status.data.length === 0 &&
          "There are no objects in your database yet."}
      </List>
    </div>
  )

  // Delete Item from API
  async function deleteOne(id) {
    const deleteUrl = url + id
    const headers = {
      headers: {
        "X-API-Key": process.env.REACT_APP_X_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    const newStatus = { ...status, isLoading: true }
    const promise = axios.delete(deleteUrl, headers)

    toast.promise(promise, {
      loading: "Loading...",
      success: "The entry was deleted successfully",
      error: "Oh no! There was an error deleting your data. Please try again.",
    })

    setStatus(newStatus)

    try {
      await promise
      newStatus.data = status.data.filter(album => album.id !== id)
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

  // Edit Item from API
  function showEditModal(id) {
    setCurrentAlbumId(id)
  }

  async function editOne(id, newObject) {
    const editUrl = url + id
    const options = {
      headers: {
        "X-API-Key": process.env.REACT_APP_X_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    const newStatus = { ...status, isLoading: true }
    const currentObject = newStatus.data.filter(album => album.id === id)[0]
    const newListObject = { ...currentObject, ...newObject }
    const promise = axios.put(editUrl, newObject, options)

    toast.promise(promise, {
      loading: "Loading...",
      success: ({ data }) => `"${data.title}" was saved successfully`,
      error: "Oh no! There was an error deleting your data. Please try again.",
    })

    setStatus(newStatus)

    try {
      await promise
      newStatus.data[newStatus.data.indexOf(currentObject)] = newListObject
      newStatus.error = null
      setStatus(newStatus)
    } catch (error) {
      newStatus.error = await error.message
      console.error("There was an error deleting data:", error)
      setStatus(newStatus)
    } finally {
      setStatus({ ...newStatus, isLoading: false })
      closeModal()
    }
  }

  // Exit Modal
  function closeModal() {
    setCurrentAlbumId(null)
  }
}

export default App

const List = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 1vh 5vw;
  display: grid;
  grid-template-columns: 1fr;

  table {
    border-collapse: collapse;
  }

  thead {
    border-bottom: 1px solid var(--color-primary-dark);
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
