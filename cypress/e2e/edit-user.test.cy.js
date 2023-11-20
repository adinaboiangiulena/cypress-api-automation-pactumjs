/// <reference types="cypress" />

const loginName = "evlHowNz";
const userPassword = "Userpass&21";
const firstName = "Anabelle";

 
describe("User registration test suite", () => {
it("Edit account first name", () => { 
    cy.visit("https://automationteststore.com");
    cy.get("#customer_menu_top > li > a").contains("Login or register").click();
    cy.get("#loginFrm_loginname").type(loginName);
    cy.get("#loginFrm_password").type(userPassword);
    cy.get('button').contains('Login').click();
    cy.get('.side_account_list >li:nth-child(3)').contains("Edit account details").click();
    cy.get('#AccountFrm_firstname').clear().type(firstName);
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();
    cy.contains('Success: Your account has been successfully updated.').should('be.visible');
});
});
