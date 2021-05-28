import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ListItem from "../components/ListItem"
import albums from "../data/albums.json"

const data = albums[0]
const handleDelete = jest.fn()
const handleEdit = jest.fn()

describe("ListItem Component", () => {
  it("renders a tbody from data variable", () => {
    render(
      <table>
        <tbody>
          <ListItem {...{ data, handleDelete, handleEdit }} />
        </tbody>
      </table>
    )

    expect(screen.getByRole("row")).toBeVisible()
  })

  it("calls a delete function on click of the trash can icon", () => {
    render(
      <table>
        <tbody>
          <ListItem {...{ data, handleDelete, handleEdit }} />
        </tbody>
      </table>
    )

    userEvent.click(screen.getByLabelText("delete"))

    expect(handleDelete).toHaveBeenCalledTimes(1)
    expect(handleDelete).toHaveBeenCalledWith(expect.any(Number))
  })

  it("calls an edit function on click of the edit icon", () => {
    render(
      <table>
        <tbody>
          <ListItem {...{ data, handleDelete, handleEdit }} />
        </tbody>
      </table>
    )

    userEvent.click(screen.getByLabelText("edit"))

    expect(handleEdit).toHaveBeenCalledTimes(1)
    expect(handleEdit).toHaveBeenCalledWith(expect.any(Number))
  })
})
