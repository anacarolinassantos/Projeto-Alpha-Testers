/// <reference types="cypress" />   

import { faker } from '@faker-js/faker';
import util_pages from '../support/pages/util_pages';
import login_page from '../support/pages/login_page'
import tela_projetos_page from '../support/pages/tela_projetos_page'


describe('Cadastro de Projetos', () => {

    beforeEach('Acessando página de cadastro', () => {
        util_pages.acessarWeb();
        login_page.fazerLogin();
    })
    it('Cadastro de Projetos', () => {
        tela_projetos_page.novoProjeto();
        tela_projetos_page.preencheTitulo("Projeto Teste");
        tela_projetos_page.preencheId(faker.string.ulid(4));
        tela_projetos_page.btnSalvarProjeto();
    })
})