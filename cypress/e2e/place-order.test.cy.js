/// <reference types="cypress" />

const baseUrl = "https://automationteststore.com/";
const loginName = "evlHowNz";
const userPassword = "Userpass&21";

describe('Order products test suite', () => {
      it('Place order from the homepage', () => {
        cy.visit("https://automationteststore.com");
        cy.get("#customer_menu_top > li > a").contains("Login or register").click();
        cy.get("#loginFrm_loginname").type(loginName);
        cy.get("#loginFrm_password").type(userPassword);
        cy.get('button').contains('Login').click();
        cy.get('a[class="active menu_home"]').click();
        cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
        cy.get('li[data-id="menu_cart"]').contains("Cart").click({ force: true });
        cy.get('#cart_checkout2').click();
        cy.get('#checkout_btn').click();
        cy.get('#maincontainer > div > div > div > h1 > span.maintext').contains("Your Order Has Been Processed!").should('be.visible');
      });
});