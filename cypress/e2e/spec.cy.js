// eslint-disable-next-line no-undef
describe('template spec', () => {
  // eslint-disable-next-line no-undef
  it('passes', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5173/')

    // eslint-disable-next-line no-undef
    cy.get('[data-testid="form"]').should("exist")

    // eslint-disable-next-line no-undef
    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    // eslint-disable-next-line no-undef
    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'password')
      .type('123456').should('have.value', '123456')   

    // eslint-disable-next-line no-undef
    cy.get('[data-testid="submit"]').click()

    // eslint-disable-next-line no-undef
    cy.get('div.home')
      .should('be.visible')  

    // eslint-disable-next-line no-undef
    cy.get('div.sidebar')
      .should('be.visible')   

    //sidebar -> user
    // eslint-disable-next-line no-undef
    cy.get('[data-testid="users"]').click()  
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/users'); //memastikan jika masuk ke halaman yg benar

    //sidebar -> products
    //cy.get('[data-testid="products"]').click()  
    //cy.url().should('include', '/products'); //memastikan jika masuk ke halaman yg benar
  
  })
})