describe('Hooks', () => {
  before(() => {
    cy.log('Executado uma vez antes de todos os testes')
  })

  beforeEach(() => {
    cy.log('Executa antes de cada um dos teste')
  })

  afterEach(() => {
    cy.log('Executa após cada um dos testes')
  })

  after(() => {
    cy.log('Executa somente após todos os testes')
  })

  it('Teste 1', () => {
    cy.log('Executando o Teste 1')
  })

  it('Teste 2', () => {
    cy.log('Executando o Teste 2')
  })

  it('Teste 3', () => {
    cy.log('Executando o Teste 3')
  })
})
