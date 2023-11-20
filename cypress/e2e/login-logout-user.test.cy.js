/// <reference types="cypress" />

const baseUrl = "https://automationteststore.com/";
const loginName = "evlHowNz";
const userPassword = "Userpass&21";

describe("Login-Logout test suite", () => {
    it("Login-Logout - Successful Request", () => {
      cy.visit("https://automationteststore.com");
      cy.get("#customer_menu_top > li > a").contains("Login or register").click();
      cy.get("#loginFrm_loginname").type(loginName);
      cy.get("#loginFrm_password").type(userPassword);
      cy.get('button').contains('Login').click();
      cy.get(".topnavbar select.form-control").trigger("mouseover");
      cy.get('#main_menu > li:nth-child(2) > ul > li:nth-child(2) > a > span').click({ force: true });
      cy.contains('You have been logged off your account. It is now safe to leave the computer.').should('be.visible');
      });
    });