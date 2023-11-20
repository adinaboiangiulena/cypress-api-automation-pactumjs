const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("POST - Log in user", () => {
  before(async () => {
    request.setDefaultTimeout(15000);
  });
  it("POST - Log in user", async () => {
    await spec()
      .post(baseUrl + "/users/login")
      .withHeaders("Content-Type", "application/json")
      .withBody({
        email: "anemarie.92@hulu.com",
        password: "xYx6MKcLCuAtzo9",
      })

      .expectStatus(200);
  });
});
