/// <reference types="cypress" />   

import util_pages from '../support/pages/util_pages'
import login_page from '../support/pages/login_page'

describe('Tela de Login', () => {

  beforeEach('Acessando o site', () => {
    util_pages.acessarWeb();
  })
  it('Validar Campo Email Vazio', () => {
    login_page.preencherSenha();
    login_page.btnAcessar();
    login_page.validaCampoEmailVazio();
  }),

    it('Validar Campo Senha Vazio', () => {
      login_page.preencherEmail('anatester@hotmail.com');
      login_page.btnAcessar();
      login_page.validaCampoSenhaVazio();
    }),

    it('Login Com Sucesso', () => {
      login_page.fazerLogin();
    })
})
