import styled from "styled-components/macro"

export default function Card({ data }) {
  const { title, artist, released_in } = data

  return (
    <Component>
      <h2>{title}</h2>
      <span>
        by {artist} ({released_in})
      </span>
      <Trash>🗑️</Trash>
    </Component>
  )
}

const Component = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: var(--shadow);
  padding: 2rem;
`
const Trash = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 1.2rem;
`
