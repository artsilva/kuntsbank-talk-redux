import mockAxios from "axios"
import { getUserList } from "./tallerService"

jest.mock("axios")

describe("tallerService test", () => {
  it("return user when axios user api is called", async () => {
    const id = 1
    const userList = {
      data: { user: "Dummy", email: "dummy@dummy.com", phone: "1234" },
    }

    mockAxios.get.mockResolvedValue(userList)

    const response = await getUserList(id)

    expect(response).toStrictEqual(userList)
    expect(mockAxios.get).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    )
  })
})
