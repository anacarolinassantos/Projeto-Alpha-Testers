/// <reference types="cypress" />   

export default {
    fazerLogin() {
        this.preencherEmail('anatester@hotmail.com');
        this.preencherSenha();
        this.btnAcessar();
    },

    btnAcessar: () => {
        cy.get(':nth-child(4) > .MuiButtonBase-root')
            .click();
    },

    preencherEmail(email) {
        cy.get('#\\:r0\\:')
            .type(email);

    },
    preencherSenha() {
        cy.get('#\\:r1\\:')
            .type(Cypress.env('senha'), { log: false });
    },

    validaCampoEmailVazio() {
        cy.contains('span', 'Erro ao realizar login. Verifique seus dados e tente novamente.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and('have.css', 'font-size', '12px');

    },

    validaCampoSenhaVazio() {
        cy.contains('span', 'Erro ao realizar login. Verifique seus dados e tente novamente.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and('have.css', 'font-size', '12px');

    }
};