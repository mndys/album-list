import { InlineIcon } from "@iconify/react"
import trashCan from "@iconify/icons-akar-icons/trash-can"
import editIcon from "@iconify/icons-akar-icons/edit"
import styled from "styled-components/macro"

export default function ListItem({ data, handleDelete, handleEdit }) {
  const { id, title, artist, released_in } = data

  return (
    <Row>
      <td>
        <InlineIcon
          className="icon"
          icon={editIcon}
          onClick={() => handleEdit(id)}
          aria-label="edit"
        />
      </td>
      <td>
        <InlineIcon
          className="icon"
          icon={trashCan}
          onClick={() => handleDelete(id)}
          aria-label="delete"
        />
      </td>
      <td>
        <h3>{title}</h3>
      </td>
      <td>{artist}</td>
      <td>{released_in}</td>
    </Row>
  )
}

const Row = styled.tr`
  padding: 1vw;

  td {
    padding: 0.2em;

    :first-child,
    :nth-child(2),
    :last-child {
      text-align: center;
    }

    :first-child,
    :nth-child(2) {
      width: 30px;
      height: 30px;
    }

    h3 {
      padding-left: 0.6em;
    }
  }

  .icon {
    :hover {
      cursor: pointer;
      font-size: 1.1em;
    }
  }
`
