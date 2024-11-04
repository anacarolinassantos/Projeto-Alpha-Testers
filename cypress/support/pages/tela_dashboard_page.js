/// <reference types="cypress" />   

export default {

    abaDashboard() {
        cy.get('.MuiList-root > :nth-child(2)')
            .click();
    },

    selecioneRepositorio() {
        cy.get('li[role="option"]', { timeout: 20000 }).contains('Teste').click()

    },

    btnExecutarPipeline() {
        cy.contains('button', 'Executar pipeline')
            .click();
    }
};