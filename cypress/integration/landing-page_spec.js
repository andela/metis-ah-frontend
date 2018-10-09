describe('THE FIRST TEST', () => {
  it('Visit the AH homepage', () => {
    cy.visit('http://localhost:3500');
    cy.contains('Author\'s Haven');
    cy.contains('A community where readers and writers come together to share and discuss knowledge and ideas.');
  });
});
