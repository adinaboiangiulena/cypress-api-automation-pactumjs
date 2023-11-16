const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseUrl = "https://practice.expandtesting.com/notes/api";
const userName = "Ana";
const getAllNotesSchema = require("../data/response/get-all-notes.schema.json");

const randomName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("API Pactum Test Suite", () => {
  before(async () => {
    request.setDefaultTimeout(15000);
  });


  it("POST - Register user - valid scenario", async () => {
    console.log(
      `User registered with fakerjs name: ${randomName}, email: ${randomEmail}, password: ${randomPassword}.`
    );
    await spec()
      .post(baseUrl + "/users/register")
      .withBody({
        name: randomName,
        email: randomEmail,
        password: randomPassword,
      })
      .expectStatus(201);
  });

  it("POST - Register user - invalid scenario", async () => {
    await spec()
      .post(baseUrl + "/users/register")
      .withBody({
        name: userName,
        email: randomEmail,
        password: randomPassword,
      })
      .returns("User name must be between 4 and 30 characters")
      .expectStatus(400);
  });

  it("POST - Log in user", async () => {
    await spec()
      .withBody({
        "email": randomEmail,
        "password": randomPassword,
  })
      .post(baseUrl + "/users/login")
      .expectStatus(200);
  });

  it("Post - Create new note", async () => {
    const requestBody = {
      title: "Automation tests",
      description: "This note contains automated tests",
      category: "Work",
    };
    await spec()
      .withHeaders(
        "X-Auth-Token",
        "7023eeec54d24cb5885bf52e8fb968048e64ac7b7cfb4ea0a4e6b2acc852223a"
      )
      .withBody(requestBody)
      .post(baseUrl + "/notes")
      .expectStatus(200);
  });

  it("GET all notes schema", async () => {
    await spec()
      .withHeaders(
        "X-Auth-Token",
        "7023eeec54d24cb5885bf52e8fb968048e64ac7b7cfb4ea0a4e6b2acc852223a"
      )
      .get(baseUrl + "/notes")
      .expectStatus(200)
      .expectJsonSchema(getAllNotesSchema)
      .toss();
  });




});
