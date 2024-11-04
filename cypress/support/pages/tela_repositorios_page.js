/// <reference types="cypress" />   

export default {

    abaRepositorios() {
        cy.get('.MuiList-root > :nth-child(3)')
            .click();
    },

    preencheRepositorio(rep) {
        cy.get('#\\:r2\\:')
            .type(rep);
    },

    preenchePipeline(pip) {
        cy.get('#\\:r3\\:')
            .type(pip);
    },

    preencheApelido(ap) {
        cy.get('#\\:r4\\:')
        .type(ap);
    },

    btnSalvarRepositorio() {
        cy.contains('button', 'Adicionar repositório')
            .click();
    },

    mensagemCampoVazio() { 
        cy.get('.MuiFormHelperText-root')
            .should('be.visible')
            .contains('Preencha este campo.');
    },
    
    mensagemPipelineInvalida() { 
        cy.get('.Toastify__toast-body > :nth-child(2)')
            .should('be.visible')
            .contains('Pipeline deve ser um arquivo .yml');
    }
};