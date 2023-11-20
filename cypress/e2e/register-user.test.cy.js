/// <reference types="cypress" />
 import { faker } from "@faker-js/faker";
 
 const loginName = faker.string.alpha({ length: { min: 3, max: 10 } });
 const userPassword = "Userpass&21";
 
describe("User registration test suite", () => {

    it("Register new user", () => {  
        cy.visit("https://automationteststore.com");  
        cy.get("#customer_menu_top > li > a").contains("Login or register").click();
        cy.get('button').contains('Continue').click();
        cy.get('#AccountFrm_firstname').type(faker.person.firstName());
        cy.get('#AccountFrm_lastname').type(faker.person.lastName());
        cy.get('#AccountFrm_email').type(faker.internet.email());
        cy.get('#AccountFrm_address_1').type(faker.location.streetAddress());
        cy.get('#AccountFrm_city').type(faker.location.city());
        cy.get('#AccountFrm_zone_id').select("Aberdeen");
        cy.get("#AccountFrm_postcode").type(faker.location.zipCode());
        cy.get("#AccountFrm_country_id").type(faker.location.country());
        cy.get('#AccountFrm_loginname').type(loginName);
        cy.get('#AccountFrm_password').type(userPassword);
        cy.get('#AccountFrm_confirm').type(userPassword);
        cy.get("#AccountFrm_newsletter0").check();
        cy.get('#AccountFrm_agree').check();
        cy.get('button').contains('Continue').click();
        cy.contains('Your Account Has Been Created!').should('be.visible'), {delay:0};
    });
});

        
