describe('Footer', () => {
  it('has 4 links', () => {
    cy.visit('/')
    cy.get('[data-cy="site-footer"] a').should('have.length', 4)
  })

  it('has citations link', () => {
    cy.visit('/')
    cy.get('[data-cy="site-footer"] a[href="/citations"]').should('exist')
  })

  it('has accessibility statement link', () => {
    cy.visit('/')
    cy.get('[data-cy="site-footer"] a[href="https://github.com/dmlb/covid-care/blob/main/ACCESSIBILITY_STATEMENT.md"]').should('exist')
  })

  it('has report issue link', () => {
    cy.visit('/')
    cy.get('[data-cy="site-footer"] a[href="https://github.com/dmlb/covid-care/issues"]').should('exist')
  })

  it('has contribute link', () => {
    cy.visit('/')
    cy.get('[data-cy="site-footer"] a[href="https://github.com/dmlb/covid-care"]').should('exist')
  })
})
