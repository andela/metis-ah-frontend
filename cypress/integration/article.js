describe('THE FORM TEST', () => {
  it('Visit the article form', () => {
    cy.visit('http://localhost:3500');
    cy.contains('FASHION').click();
    cy.wait(7000);
    cy.contains('metis team').scrollIntoView();
  });
});
