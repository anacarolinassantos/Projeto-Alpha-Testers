/// <reference types="cypress" />   

import util_pages from '../support/pages/util_pages'
import login_page from '../support/pages/login_page'
import tela_repositorios_page from '../support/pages/tela_repositorios_page';

describe('Cadastro de Repositórios', () => {

    beforeEach('Acessando página de repositórios', () => {
        util_pages.acessarWeb();
        login_page.fazerLogin();
    })
    it('Cadastro de Repositório', () => {
        tela_repositorios_page.abaRepositorios();
        tela_repositorios_page.preencheRepositorio("Repositorio Teste");
        tela_repositorios_page.preenchePipeline("pipeline.yml");
        tela_repositorios_page.preencheApelido("Teste");
        tela_repositorios_page.btnSalvarRepositorio();
    })
    it('Validação Pipeline', () => {
        tela_repositorios_page.abaRepositorios();
        tela_repositorios_page.preencheRepositorio("Repositorio Teste");
        tela_repositorios_page.preenchePipeline("Repositorio Teste");
        tela_repositorios_page.preencheApelido("Teste");
        tela_repositorios_page.btnSalvarRepositorio();
        tela_repositorios_page.mensagemPipelineInvalida();
    })
})