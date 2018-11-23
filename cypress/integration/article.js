describe('THE FORM TEST', () => {
  it('Visit the article form', () => {
    cy.visit('http://localhost:3500');
    if (window.innerWidth > 1086) {
      cy.contains('FASHION').click();
    } else {
      cy.get('#js_burger').click();
      cy.contains('FASHION').click();
    }

    cy.wait(7000);
    cy.contains('Metis Team').scrollIntoView();
  });
});
