describe('Header', () => {
  it('has link to home page', () => {
    cy.visit('/')
    cy.get('[data-cy="site-header"] a').should('have.length', 1)
    cy.get('[data-cy="site-header"] a').should('have.attr', 'href')
    .and('include', '/')
  })

  it('has site name as title', () => {
    cy.visit('/')
    cy.get('#siteTitle').contains('Covid Care')
  })
})
