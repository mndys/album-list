import { useRef, useState } from "react"
import styled from "styled-components/macro"
import useClickedOutside from "../hooks/useClickedOutside"

export default function Modal({ status, id, handleEdit, handleClose }) {
  const currentObject = status.data.filter(album => album.id === id)[0]
  const { title, artist, released_in } = currentObject
  const [newObject, setNewObject] = useState({ title, artist, released_in })
  const modal = useRef(null)

  useClickedOutside(modal, handleClose)

  return (
    <Content ref={modal}>
      <h2>Edit Album</h2>
      <label htmlFor="album">Album</label>
      <input
        type="text"
        name="album"
        value={newObject.title}
        onChange={event => {
          setNewObject({ ...newObject, title: event.target.value })
          console.log(newObject)
        }}
      />
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        name="artist"
        value={newObject.artist}
        onChange={event =>
          setNewObject({ ...newObject, artist: event.target.value })
        }
      />
      <label htmlFor="year">Year</label>
      <input
        type="number"
        minLength={3}
        max={new Date().getFullYear() + 2}
        name="year"
        value={newObject.released_in}
        onChange={event =>
          setNewObject({ ...newObject, released_in: event.target.value })
        }
      />
      <button className="cancel" onClick={handleClose}>
        Cancel
      </button>
      <button className="save" onClick={() => handleEdit(id, newObject)}>
        Save
      </button>
    </Content>
  )
}

const Content = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em 0.5em;
  width: clamp(300px, 90vw, 500px);
  border-radius: 15px;
  border: 1px solid #000;
  padding: 2em;
  background-color: var(--color-platinum);

  h2 {
    flex: 100%;
    text-align: center;
    padding-bottom: 1em;
  }

  label {
    flex: 15%;
  }
  input {
    flex: 80%;
  }

  button {
    flex: 25%;
    margin-top: 0.5em;

    :hover {
      cursor: pointer;
      filter: saturate(130%);
    }
  }

  .cancel {
    background-color: darkred;
  }

  .save {
    background-color: var(--color-primary);
  }
`
