describe('Home Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('A Consent Communication Tool')
  })
})
