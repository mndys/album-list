import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Modal from "../components/Modal"
import albums from "../data/albums.json"

const status = { data: albums, error: null, isLoading: false }
const id = albums[0].id
const handleEdit = jest.fn()
const handleClose = jest.fn()

describe("Modal Component", () => {
  it("renders a modal with inputs for album title, artist, and release year, and two buttons", () => {
    render(<Modal {...{ status, id, handleEdit, handleClose }} />)

    expect(screen.getByDisplayValue(status.data[0].title)).toBeInTheDocument()
    expect(screen.getByDisplayValue(status.data[0].artist)).toBeInTheDocument()
    expect(
      screen.getByDisplayValue(status.data[0].released_in)
    ).toBeInTheDocument()
    expect(screen.getAllByRole("button")).toHaveLength(2)
  })

  it("calls a closing function on click of the cancel button", () => {
    render(<Modal {...{ status, id, handleEdit, handleClose }} />)

    userEvent.click(screen.getByRole("button", { name: "Cancel" }))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("calls an edit function that submits the currentObject's id and an object containing its album title, artist, and year of release on click of the save button", () => {
    render(<Modal {...{ status, id, handleEdit, handleClose }} />)

    userEvent.click(screen.getByRole("button", { name: "Save" }))

    expect(handleEdit).toHaveBeenCalledTimes(1)
    expect(handleEdit).toHaveBeenCalledWith(albums[0].id, {
      title: albums[0].title,
      artist: albums[0].artist,
      released_in: albums[0].released_in,
    })
  })
})
