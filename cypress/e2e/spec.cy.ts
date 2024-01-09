describe('Testing app component', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('h1').contains('Hello, proleit');
    cy.contains('Congratulations! Your app is running. 🎉')
    cy.get('[href="https://angular.dev/tools/devtools"] > span').click()
  })
})
