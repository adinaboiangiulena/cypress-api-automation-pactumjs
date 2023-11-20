const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api";

const requestBody = {
  email: "anemarie.92@hulu.com",
  password: "xYx6MKcLCuAtzo9",
};

describe("POST - Create note with the registered user", () => {
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

  it("Create new note", async () => {
    const requestBody = await spec()
      .post(baseUrl + "/notes")
      .withHeaders("X-Auth-Token", authToken)
      .withBody({
        title: "Automation tests",
        description: "My test note",
        category: "Work",
      })
      .expectStatus(200);
  });
});
