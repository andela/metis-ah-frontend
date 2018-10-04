describe('THE FIRST TEST', () => {
  it('Visit the AH homepage', () => {
    cy.visit('http://localhost:3500');
    cy.contains('Hello React!');
  });
});
