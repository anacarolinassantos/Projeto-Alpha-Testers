/// <reference types="cypress" />   

import util_pages from '../support/pages/util_pages'
import login_page from '../support/pages/login_page'
import tela_dashboard_page from '../support/pages/tela_dashboard_page'

describe('Tela Dashboard', () => {

  beforeEach('Acessando o dashboard', () => {
    util_pages.acessarWeb();
    login_page.fazerLogin();

  })

  Cypress.on('uncaught:exception', () => {
    return false;
  });
  it('Executar Pipeline', () => {
    tela_dashboard_page.abaDashboard();
    tela_dashboard_page.btnExecutarPipeline();
  })
})
