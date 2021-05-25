import styled from "styled-components/macro"

export default function ListItem({ data, handleDelete }) {
  const { id, title, artist, released_in } = data

  return (
    <Row>
      <td>
        <Icon>✏️</Icon>
      </td>
      <td>
        <Icon onClick={() => handleDelete(id)}>🗑️</Icon>
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
    padding: 0.2em 0.4em;
  }
`
const Icon = styled.div`
  justify-self: center;

  :hover {
    cursor: pointer;
  }
`
