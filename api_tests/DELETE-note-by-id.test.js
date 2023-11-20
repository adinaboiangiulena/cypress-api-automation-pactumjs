const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api";
const requestBody = {
  email: "anemarie.92@hulu.com",
  password: "xYx6MKcLCuAtzo9",
};

describe("DELETE - Notes", () => {
  let authToken = "";
  before(async () => {
    request.setDefaultTimeout(15000);

    const response = await spec()
      .post(baseUrl + "/users/login")
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200);
    authToken = response.body.data.token;
  });

  it("Delete notes by Id", async () => {
    await spec()
      .delete(baseUrl + "/notes/" + "655bb2a52a50dc01415f416a")
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
  });
});
