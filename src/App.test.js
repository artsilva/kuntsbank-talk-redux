import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock("./containers/TallerContainer", () => () => (
  <div>TallerContainer</div>
))

test("renders TallerContainer", () => {
  render(<App />)
  const linkElement = screen.getByText("TallerContainer")
  expect(linkElement).toBeDefined()
})
