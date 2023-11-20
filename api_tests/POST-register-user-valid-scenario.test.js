const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseUrl = "https://practice.expandtesting.com/notes/api";

const randomName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("POST - Valid registration", () => {
  before(async () => {
    request.setDefaultTimeout(15000);
  });

  it("Register user - valid scenario", async () => {
    await spec()
      .post(baseUrl + "/users/register")
      .withBody({
        name: randomName,
        email: randomEmail,
        password: randomPassword,
      })
      .expectStatus(201);
  });
});
