const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseUrl = "https://practice.expandtesting.com/notes/api";

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const invalidUser = faker.string.alpha({ length: { min: 0, max: 3 } });

describe("POST - Invalid registration", () => {
  before(async () => {
    request.setDefaultTimeout(15000);
  });

  it("Register user - invalid scenario", async () => {
    await spec()
      .post(baseUrl + "/users/register")
      .withBody({
        name: invalidUser,
        email: randomEmail,
        password: randomPassword,
      })
      .inspect()
      .expectBodyContains("User name must be between 4 and 30 characters")
      .expectStatus(400);
  });
});
