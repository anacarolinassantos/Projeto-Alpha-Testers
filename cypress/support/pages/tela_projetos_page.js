/// <reference types="cypress" />   

export default {

    novoProjeto() {
        cy.contains('button', 'Novo projeto').click();
    },

    preencheTitulo(titulo) {
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic')
            .type(titulo);
    },

    preencheId(id) {
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic')
            .type(id);
    },

    btnSalvarProjeto() {
        cy.get('[style="padding: 20px; width: 100%; display: flex; flex-direction: column;"] > .MuiBox-root > .MuiButtonBase-root')
            .click();
    },                                    
};