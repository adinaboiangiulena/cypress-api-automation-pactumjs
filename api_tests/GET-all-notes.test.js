const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api";
const getAllNotesSchema = require("../data/response/get-all-notes.schema.json");
const requestBody = {
  email: "anemarie.92@hulu.com",
  password: "xYx6MKcLCuAtzo9",
};

describe("GET - Notes test suite", () => {
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

  it("GET all notes schema", async () => {
    await spec()
      .withHeaders("X-Auth-Token", authToken)
      .get(baseUrl + "/notes")
      .expectStatus(200)
      .expectJsonSchema(getAllNotesSchema);
  });
});
